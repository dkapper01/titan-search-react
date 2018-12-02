import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  displayResults() {
    return this.props.results.map(result => (
      <li key={result.cacheId}>
        <span>{result.htmlSnippet}</span>
        <a href={result.link}>{result.displayLink}</a>
      </li>
    ));
  }
  render() {
    return <ul className="search-results">{this.displayResults()}</ul>;
  }
}

export default SearchResults;
