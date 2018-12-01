import React, { Component } from "react";
import ActionButton from "./actionButtons/ActionButtons";
import axios from "axios";

const divStyle = {};

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      search: "qctzzxd3rpa",
      results: []
    };

    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }
  results = [];
  handleGoogle() {
    window.open("http://www.google.com/search?q=" + this.state.value, "_blank");
    console.log("googling");
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  componentDidMount() {}
  handleDeleteAll() {
    this.setState({ value: "" });
    console.log("delete All");
  }
  handleOnSubmit = e => {
    e.preventDefault();
    console.log("submitting");
    const cx = "007806920644787485811:qgwcit01afm";
    const key = "AIzaSyDtoEySNigTP4xTdFiL5ce6Q9S2Pi6fVZI";
    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${
          this.state.value
        }
    `
      )
      .then(res => {
        console.log(res);
        const results = res.data.items.map(item => (
          <li key={item.link}>{item.htmlSnippet}</li>
        ));
        this.setState({ results });
      });
  };
  handleGoBack() {
    const n = this.state.value.split(" ");
    const newValue = n.slice(0, -1);
    const i = newValue.join(" ");
    this.setState({ value: i });
    console.log("go back");
  }
  handleOnSubmitActionButtons(e) {
    // e.preventDefault()
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-md flex-md-nowrap p-1 shadow fixed-top nav-color"
        // style="background-color: #3f51b5;"
      >
        <a className="logo-style col-sm-3 col-md-2 mr-0 text-white" href="1">
          TitanSearch
        </a>
        <form
          className="form-control form-style"
          onSubmit={this.handleOnSubmit}
        >
          <div className="input-group">
            <input
              type="search"
              name="q"
              placeholder="Search Custom Search Engine or Google"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
              aria-label=""
              aria-describedby="basic-addon1"
            />
            <span className="input-group-append">
              <button
                type="submit"
                onClick={this.handleOnSubmit}
                className="btn btn-outline-light my-2 my-sm-0"
              >
                Search
              </button>
              <button
                type="submit"
                onClick={this.handleGoogle}
                className="btn btn-outline-light my-2 my-sm-0"
              >
                Google
              </button>
            </span>
          </div>
        </form>
        <ActionButton />
        <ul>{this.state.results}</ul>
      </nav>
    );
  }
}

export default SearchBox;
