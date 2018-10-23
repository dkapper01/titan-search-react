import React from "react";


const ActionButtons = props => {

  return (
    <div>
      <button onClick={props.handleGoBack}>Go Back</button>
      <button onClick={props.handleDeleteAll}>Delete All</button>
      <button>Toggle</button>
    </div>
  );
};

export default ActionButtons;
