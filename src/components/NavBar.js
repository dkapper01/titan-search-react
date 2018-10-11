import React from "react";
import SearchBox from "../components/SearchBox";
import Dropdown from "../components/Dropdown";
import BtnBank from "../components/BtnBank";
import "../App.css";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary">
          <Dropdown />
          <SearchBox />
          <BtnBank />
        </nav>
      </div>
    );
  }
}

export default NavBar;
