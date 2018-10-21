import React from "react";
import '../App.css'

class GoBackBtn extends React.Component {
  render() {
    return (
      <div className="action_btn">
        <a className="text-white" href="s">
          <i className="fa fa-step-backward" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default GoBackBtn;
