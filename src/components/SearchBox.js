import React, { Component } from "react";
import ActionButton from "./actionButtons/ActionButtons";

const divStyle = {};

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      search: "qctzzxd3rpa"
    };

    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoogle() {
    window.open("http://www.google.com/search?q=" + this.state.value, "_blank");
    console.log("googling");
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  componentDidMount() {
    (function() {
      var cx = "007806920644787485811:qgwcit01afm";
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
  handleOnSubmitActionButtons(e) {
    // e.preventDefault()
  }
  render() {
    return (
      <nav
        class="navbar navbar-expand-md flex-md-nowrap p-1 shadow fixed-top nav-color"
        // style="background-color: #3f51b5;"
      >
        <a class="logo-style col-sm-3 col-md-2 mr-0 text-white" href="1">
          TitanSearch
        </a>
        <form
          className="form-control form-style"
          action=""
          method="get"
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
            <span class="input-group-append">
              <button
                type="submit"
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
      </nav>
    );
  }
}

export default SearchBox;
