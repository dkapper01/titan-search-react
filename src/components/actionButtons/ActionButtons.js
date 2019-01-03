import React from "react";

const ActionButtons = props => {
  return (
    <div className="box">
      <button
        className="btns"
        type="submit"
        onClick={props.handleDeleteAll}
      >
        <img className="test" src={require("../actionButtons/clear-button.png")} alt="trash" />
      </button>
    </div>
  );
};

export default ActionButtons;

