import React from "react";

const style  = {
  btnStyle: {
    background: 'transparent',
    border: 'none'
  }
};

// background-color: transparent !important;
// border: none !important;

const ActionButtons = props => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
        <button 
            type="submit"
            onClick={props.handleGoBack} 
            style={style.btnStyle}
          >
            <img src={require('../actionButtons/back-button.png')} alt="back button" />
            </button>
        </li>
        <li className="nav-item">
        <button
            type="submit"
            onClick={props.handleDeleteAll}
            style={style.btnStyle}
          >
            <img src={require('../actionButtons/trash.png')} alt="trash" />

          </button>
        </li>
      </ul>
    </div>
  );
};

export default ActionButtons;
