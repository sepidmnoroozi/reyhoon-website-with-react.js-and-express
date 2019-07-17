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
      <div class="topnav">
        <div class="haha">
          salam
          <a href="#login">ورود</a>
          <a class="near big">|</a>
          <a class="near" href="#signup">
            عضویت
          </a>
          <a href="/">راهنما</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
