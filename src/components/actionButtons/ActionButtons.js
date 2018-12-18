import React from "react";

const ActionButtons = props => {
  return (
    <div>
      <ul className="actionUL">
        <li className="actionBtn">
          <button className="btns" type="submit" onClick={props.handleGoBack}>
            <img className="test" src={require("../actionButtons/back.png")} alt="back button" />
          </button>
        </li>
        <li className="actionBtn x-btn">
          <button
            className="btns"
            type="submit"
            onClick={props.handleDeleteAll}
          >
            <img className="test" src={require("../actionButtons/clear-button.png")} alt="trash" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ActionButtons;

{
  /* <ul className="navbar-nav">
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
</ul> */
}
