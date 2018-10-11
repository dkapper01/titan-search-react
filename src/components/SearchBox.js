import React from "react";
import "../App.css";

class SearchBox extends React.Component {
  render() {
    return (
      <div className="form_box">
        <form className="">
          <div className="input-group">
            <input
              type="text"
              className="form-control input-lg"
              placeholder="Search..."
            />
            <div className="input-group-append">
              <button className="btn btn-outline-light" type="button">
                Custom
              </button>
              <button className="btn btn-outline-light" type="button">
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
