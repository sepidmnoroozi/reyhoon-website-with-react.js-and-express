import React, { Component } from "react";
import toppic from "/home/mnoroozi/final-project/backend/client/src/img/toppic.jpg";
import "/home/mnoroozi/final-project/backend/client/src/App.css";

class Restaurantslist extends Component {
  render() {
    return (
      <div className="landing-all">
        <div className="toppic">
          <img src={toppic} alt="toppic" id="toppic" />
        </div>
        <div className="description">
          الان ۱۰ رستوران امکان سرویس دهی به تهران را دارند
        </div>
        <div className="divsearch">
          <input
            placeholder="جست و جوی رستوران در این محدوده"
            className="allsearch"
          />
          <i class="fas fa-search allser" />
        </div>
        <div className="allsecond">
          <div className="rests" />
          <div className="" />
        </div>
      </div>
    );
  }
}

export default Restaurantslist;
