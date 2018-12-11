import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <nav className="col-md-2  bg-light sidebar">
          <div className="sidebar-sticky">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Custom Searchs</span>
              <a className="d-flex align-items-center text-muted" href="#" />
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TitanSearch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Salary
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  College
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Social Media
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
