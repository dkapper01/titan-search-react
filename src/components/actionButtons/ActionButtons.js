import React from "react";

// class ActionButtons extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

//   render() {
//     return (
//       <div>
//           <button>Go Back</button>
//           <button onChange={this.props.handleDeleteAll}>Delete All</button>
//           <button>Toggle</button>
//       </div>
//     )
//   }
// }
console.log("working");

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
