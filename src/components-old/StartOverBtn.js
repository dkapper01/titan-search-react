import React from "react";
import '../App.css'

class StartOverBtn extends React.Component {
  render() {
    return (
      <div className="action_btn">
        <a className="text-white" href="s">
          <i className="fa fa-undo" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default StartOverBtn;
