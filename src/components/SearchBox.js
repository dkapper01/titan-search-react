import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Search</button>
          <button>Google</button>
        </form>
      </div>
    )
  }
}
