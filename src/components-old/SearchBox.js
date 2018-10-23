import React from "react";
import AddButtonToList from "./ButtonList/AddButtonToList";
import "../App.css";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGoogle() {
    window.open("http://www.google.com/search?q=" + this.state.value, "_blank");
  }
  
  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  }
  componentDidMount() {
    // localStorage.setItem("test", this.state.value);
  }

  handleSubmit(e) {
    // alert("this.state.value");
    // console.log(this.state.value);
    // e.preventDefault();
    // localStorage.setItem("key", this.state.value);
  }

  render() {
    return (
      <div className="form_box">
        <form
          className=""
          action=""
          method="get"
          id="cse-search-box"
          name="cse-search-box"
          target=""
          // onSubmit={this.handleSubmit}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Search..."
              id="googleInput"
              value={this.state.value}
              onChange={this.handleChange} 
              name="q"
            />
            <div className="input-group-append">
              <button
                id="gcs"
                name="q"
                className="btn btn-outline-light"
                type="button"
              >
                Custom
              </button>
              <button
                onClick={this.handleGoogle}
                className="btn btn-outline-light"
                type="button"
              >
                Google
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
