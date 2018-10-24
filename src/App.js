import React, { Component } from "react";
import SearchBox from './components/SearchBox'; 
import ButtonContainer from './components/buttonContainer/ButtonContainer'; 
import ActionButtons from './components/actionButtons/ActionButtons';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
        <hr/>
        <SearchBox />
        <hr/>
        <ButtonContainer />
        <hr/>
      </div>
    );
  }
}

export default App;
