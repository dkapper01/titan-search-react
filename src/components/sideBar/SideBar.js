import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <nav class="col-md-2  bg-light sidebar">
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Custom Searchs</span>
              <a class="d-flex align-items-center text-muted" href="#" />
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  TitanSearch
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Salary
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  College
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
