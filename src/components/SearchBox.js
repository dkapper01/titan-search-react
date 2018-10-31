import React, { Component } from "react";
import ActionButton from "./actionButtons/ActionButtons";

const divStyle = {
  width: "100%",
  // height: '100px',
  // border: '1px solid red',
  display: "inline-block"
};
const brandStyle = {
  border: "1px solid red",
  display: "inline-block"
};
const navStyle = {
  width: "100%"
};
const formStyle = {
  display: "inline-block"
};

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
      <div style={divStyle}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <form
            style={navStyle}
            className=""
            action=""
            method="get"
            onSubmit={this.handleOnSubmit}
          >
            <div className="input-group">
              <a className="navbar-brand" href="1">
                TitanSearch
              </a>

              <input
                type="search"
                name="q"
                placeholder="Search Custom Search Engine or Google"
                value={this.state.value}
                onChange={this.handleChange}
                className="form-control input-lg"
                aria-label=""
                aria-describedby="basic-addon1"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-outline-primary">
                  Search
                </button>
                <button
                  type="submit"
                  onClick={this.handleGoogle}
                  className="btn btn-outline-primary"
                >
                  Google
                </button>
              </div>
            </div>
          </form>
          <ActionButton
            handleDeleteAll={this.handleDeleteAll}
            handleGoBack={this.handleGoBack}
          />
        </nav>
      </div>
    );
  }
}

export default SearchBox;
