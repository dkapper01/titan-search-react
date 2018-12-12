import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  displayResults() {
    return this.props.results.map(result => (
      <li className="d-block mt-1" key={result.cacheId}>
        <span>{result.htmlSnippet}</span>
        <a href={result.link}>{result.displayLink}</a>
      </li>
    ));
  }
  render() {
    return (
      <div className="row justify-content-end mt-3 results-style">
        <ul className="col-md-10">{this.displayResults()}</ul>
      </div>
    );
  }
}

export default SearchResults;
