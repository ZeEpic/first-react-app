import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-fill navbar-dark justify-content-start bg-dark"
          style={{ borderRadius: 20 }}
        >
          <a
            className="navbar-brand m-2 major-mono"
            href="https://github.com/ZeEpic"
            target="_blank"
            style={{ fontSize: 36, paddingLeft: "1.5%" }}
          >
            Zeepic.me
          </a>
          <div className="navbar-content-spacing  navbar-text">
            <a className="m-2" href="#">
              Counters App
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
