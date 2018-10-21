import React from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <div className="dropdown_box">
        <div className="dropdown d-flex justify-content-start">
            <button
              className="btn btn-outline-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Searches
            </button>
            <div
              className="dropdown-menu dropdown-menu-left"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="1">
                Facebook
              </a>
              <a className="dropdown-item" href="1">
                Linkedin
              </a>
            </div>
          </div>
      </div>
    );
  }
}

export default Dropdown; 