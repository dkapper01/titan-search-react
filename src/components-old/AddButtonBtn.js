import React from "react";
import "../App.css";

class AddButtonBtn extends React.Component {
  render() {
    return (
      <div className="action_btn">
        <a
          className="text-white"
          data-toggle="collapse"
          href="#collapse"
          role="button"
        >
          <i className="fa fa-caret-down" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default AddButtonBtn;
