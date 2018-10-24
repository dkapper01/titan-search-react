import React, { Component } from "react";
import ActionButton from "./actionButtons/ActionButtons";
import DropdownMenu from "./dropdown/DropdownMenu";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      buttons: ["AND", "OR", ".com"],
      search: "qctzzxd3rpa"
    };

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleSetButton = this.handleSetButton.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this);
  }
  handleOnChangeSearch(e) {
    this.setState({ search: e.target.value });
  }
  handleSubmitSearch(e) {
    e.preventDefault();
  }
  handleGoogle() {
    window.open("http://www.google.com/search?q=" + this.state.value, "_blank");
    console.log("googling");
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  componentDidMount() {
    const test = this.state.search; 
    (function() {
      var cx = "007806920644787485811:" + test;
      var gcse = document.createElement("script");
      gcse.type = "text/javascript";
      gcse.async = true;
      gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  }
  handleDeleteAll() {
    this.setState({ value: "" });
    console.log("delete All");
  }
  handleOnSubmit(e) {
    // e.preventDefault();
  }
  handleGoBack() {
    const n = this.state.value.split(" ");
    const newValue = n.slice(0, -1);
    const i = newValue.join(" ");
    this.setState({ value: i });
    console.log("go back");
  }

  handleAddButton(button) {
    console.log("concat");
    this.setState(prevState => ({
      buttons: prevState.buttons.concat(button)
    }));
  }
  handleSetButton(i) {
    this.setState({ value: this.state.value + i });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitSearch}>
          <select
            value={this.state.search}
            onChange={this.handleOnChangeSearch}
          >
            <option value="qgwcit01afm">TitanSearch</option>
            <option value="qctzzxd3rpa">Social Media</option>
            <option value="xu4tdxf8sfc">Salary</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <form action="" method="get" onSubmit={this.handleOnSubmit}>
          <input
            type="search"
            name="q"
            placeholder="Search Custom Search Engine or Google"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
          <button onClick={this.handleGoogle}>Google</button>
          <ActionButton
            handleDeleteAll={this.handleDeleteAll}
            handleGoBack={this.handleGoBack}
          />
          <AddButton
            handleAddButton={this.handleAddButton}
            handleAddTextToField={this.handleAddTextToField}
          />

          <Buttons
            buttons={this.state.buttons}
            handleSetButton={this.handleSetButton}
          />
        </form>
      </div>
    );
  }
}

class AddButton extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const button = e.target.elements.button.value.trim();
    this.props.handleAddButton(button);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="button" />
          <button>Add Button</button>
        </form>
      </div>
    );
  }
}

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleAddTextToField = this.handleAddTextToField.bind(this);
  }
  handleAddTextToField(button) {
    console.log(button);
    this.props.handleSetButton(button);
  }
  render() {
    return (
      <div>
        {this.props.buttons.map(button => (
          <Button
            key={button}
            buttonText={button}
            handleAddTextToField={this.handleAddTextToField}
          />
        ))}
      </div>
    );
  }
}
class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const buttonOne = this.props.buttonText;
    this.props.handleAddTextToField(buttonOne);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.buttonText}</button>
      </div>
    );
  }
}

export default SearchBox;
