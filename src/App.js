import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import SideBar from "./components/sideBar/SideBar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
    this.setResults = this.setResults.bind(this);
  }
  setResults(results) {
    console.log(results);
    this.setState({ results });
  }
  render() {
    return (
      <div className="App">
        <SearchBox setResults={this.setResults} />
        <SideBar />
        <SearchResults results={this.state.results} />
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
