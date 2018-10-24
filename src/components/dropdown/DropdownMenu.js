import React, { Component } from "react";

export default class DropdownMenu extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmitSearch}>
        <select value={this.state.search} onChange={this.handleOnChangeSearch}>
          <option value="qgwcit01afm">TitanSearch</option>
          <option value="qctzzxd3rpa">Social Media</option>
          <option value="xu4tdxf8sfc">Salary</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
