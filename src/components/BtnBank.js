import React from "react";
import AddButtonBtn from "../components/AddButtonBtn";
import StartOverBtn from "../components/StartOverBtn";
import GoBackBtn from "../components/GoBackBtn";
import UserBtn from "../components/UserBtn";
import "../App.css";

class BtnBank extends React.Component {
  render() {
    return (
      <div className="bank">
        <UserBtn />
        <AddButtonBtn />
        <StartOverBtn />
        <GoBackBtn />
      </div>
    );
  }
}

export default BtnBank;
