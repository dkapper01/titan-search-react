import React from "react";
import "../App.css";

class UserBtn extends React.Component {
  render() {
    return (
      <div className="action_btn">
        <a className="text-white" href="s">
          <i className="fa fa-user-circle" aria-hidden="true" />
        </a>
      </div>
    );
  }
}

export default UserBtn;
