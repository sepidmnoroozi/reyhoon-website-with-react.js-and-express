import React, { Component } from "react";
import home from "/home/mnoroozi/final-project/backend/client/src/img/home.png";
class Navbar extends Component {
  render() {
    return (
      // <nav class="navbar navbar-expand-sm mb-4">
      //   <div class="navcontainer">
      //     <div class="collapse navbar-collapse" id="mobile-nav">
      //       <ul class="navbar-nav mr-auto">
      //         <li class="nav-item">
      //           <a class="nav-link" href="/">
      //             <img src={home} alt="homereyhoon" id="navhome" />
      //           </a>
      //         </li>
      //       </ul>

      //       <ul class="navbar-nav ml-auto">
      //         <li class="nav-item">
      //           <a class="nav-link" href="/" id="help">
      //             راهنما
      //           </a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="/">
      //             عضویت
      //           </a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="/">
      //             |
      //           </a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link" href="/">
      //             ورود
      //           </a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      <div id="navbar">
        <div id="navbar-right">
          <div id="login">
            <a href="login.html">ورود</a>
          </div>
          <div id="register">
            <a href="register.html">عضویت</a>
          </div>
          <div id="help">
            <a href="#">راهنما</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
