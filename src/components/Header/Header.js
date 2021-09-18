import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <>
        <div className="head">
          <Link className="h" to="/">
            Login
          </Link>
          <Link className="h" to="/UserList">
            Use List
          </Link>
        </div>
      </>
    );
  }
}

export default Header;
