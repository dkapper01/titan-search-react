import React, { Component } from "react";
import SearchBox from './components/SearchBox'; 
import SideBar from './components/sideBar/SideBar'; 
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
        <SideBar />
      </div>
    );
  }
}

export default App;


// type="search"
// name="q"
// placeholder="Search Custom Search Engine or Google"
// value={this.state.value}
// onChange={this.handleChange}