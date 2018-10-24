import React, { Component } from "react";
import ActionButton from "./actionButtons/ActionButtons";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      buttons: ["AND", "OR", ".com"]
    };

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleSetButton = this.handleSetButton.bind(this); 
  }
  handleGoogle() {
    window.open("http://www.google.com/search?q=" + this.state.value, "_blank");
    console.log("googling");
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  componentDidMount() {
    console.log("did mount");
  }
  handleDeleteAll() {
    this.setState({ value: "" });
    console.log("delete All");
  }
  handleOnSubmit(e) {
    e.preventDefault();
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
    console.log(i);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleDeleteAll}>Search</button>
          <button onClick={this.handleGoogle}>Google</button>
          <ActionButton
            handleDeleteAll={this.handleDeleteAll}
            handleGoBack={this.handleGoBack}
          />
          <AddButton
            handleAddButton={this.handleAddButton}
            handleAddTextToField={this.handleAddTextToField}
          />

          <Buttons buttons={this.state.buttons} handleSetButton={this.handleSetButton}/>
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
    console.log(button)
    this.props.handleSetButton(button); 
    
  }
  render() {
    return (
      <div>
        {this.props.buttons.map(button => (
          <Button key={button} buttonText={button} handleAddTextToField={this.handleAddTextToField}/>
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
