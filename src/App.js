import React, { Component } from "react";
import NavBar from "../src/components/NavBar";
import AddButtonToList from "../src/components/ButtonList/AddButtonToList"; 
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <NavBar />
        <AddButtonToList />
      </div>
    );
  }
}

export default App;
