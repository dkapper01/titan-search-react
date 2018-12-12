import React from "react";

const ActionButtons = props => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
        <button 
            className="btns"
            type="submit"
            onClick={props.handleGoBack} 
          >
            <img src={require('../actionButtons/back-button.png')} alt="back button" />
            </button>
        </li>
        <li className="nav-item">
        <button
            className="btns"
            type="submit"
            onClick={props.handleDeleteAll}
          >
            <img src={require('../actionButtons/trash.png')} alt="trash" />

          </button>
        </li>
      </ul>
    </div>
  );
};

export default ActionButtons;
