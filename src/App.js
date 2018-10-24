import React, { Component } from "react";
import SearchBox from './components/SearchBox'; 
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
        <hr/>
        <SearchBox />
        <hr/>
      </div>
    );
  }
}

export default App;
