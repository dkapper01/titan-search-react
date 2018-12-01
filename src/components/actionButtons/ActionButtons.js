import React from "react";

const btnStyle = {
  // width: '190px',
  // border: '1px solid red',
  // display: 'inline-block'
};

// background-color: transparent !important;
// border: none !important;

const ActionButtons = props => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item" />
        <li className="nav-item">
          <a className="nav-link text-white" href="1">
            <i
              className="fa fa-trash-o icon-large"
              onClick={props.handleGoBack}
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-white"
            onClick={props.handleDeleteAll}
            href="1"
          >
            <i className="fa fa-undo icon-large" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ActionButtons;

// <form className="input-group" onSubmit={props.handleOnSubmitActionButtons}>

//     <button
//       // style={btnStyle}
//         className="btn btn-outline-primary "
//         onClick={props.handleGoBack}>Go Back
//         </button>
//       <button
//       // style={btnStyle}
//         className="btn btn-outline-primary "
//         onClick={props.handleDeleteAll}>Delete All</button>
//       </form>
