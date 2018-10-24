import React, { Component } from "react";
// import ActionButton from './actionButtons/ActionButtons';
import ActionButton from "../components/actionButtons/ActionButtons";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }
  handleGoogle() {
    window.open("http://www.google.com/search?q=" + this.state.value, "_blank");
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleDeleteAll() {
    this.setState({ value: "" });
    console.log("DeleteAll");
  }
  handleOnSubmit(e) {
    e.preventDefault();
  }
  handleGoBack() {
    const n = this.state.value.split(" ");
    const newValue = n.slice(0, -1);
    const i = newValue.join(" "); 
    this.setState({ value: i });
  }
  handleAddValue() {

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
        </form>
      </div>
    );
  }
}

export default SearchBox;
