import React, { Component } from "react";
import home from "/home/mnoroozi/final-project/backend/client/src/img/home.png";

class Navbar extends Component {
  render() {
    return (
      <div className="topnav">
        <div className="haha">
          <img alt="home pic" id="navhome" src={home} />
          <a href="login">ورود</a>
          <a className="near big" href=" ">
            |
          </a>
          <a className="near" href="signup">
            عضویت
          </a>
          <a href=" ">راهنما</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
