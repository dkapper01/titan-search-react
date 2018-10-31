import React from "react";

const btnStyle = {
  // width: '190px',
  // border: '1px solid red',
  display: 'inline-block'
};

// background-color: transparent !important;
// border: none !important; 

const ActionButtons = props => {

  return (
    <div className="input-group" style={btnStyle}>
    <form className="input-group" onSubmit={props.handleOnSubmitActionButtons}>

    <button
      // style={btnStyle}
        className="btn btn-outline-primary "
        onClick={props.handleGoBack}>Go Back
        </button>
      <button 
      // style={btnStyle}
        className="btn btn-outline-primary "
        onClick={props.handleDeleteAll}>Delete All</button>
      </form>
      
    </div>
  );
};

export default ActionButtons;
