import React, { Component } from "react";
import SearchBox from './components/SearchBox'; 
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fullwidth">
        <SearchBox />
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