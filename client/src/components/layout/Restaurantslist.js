import React, { Component } from "react";
import toppic from "/home/mnoroozi/final-project/backend/client/src/img/toppic.jpg";
import "/home/mnoroozi/final-project/backend/client/src/App.css";
const dic = {
  mirdamad: "میرداماد",
  jordan: "جردن"
};
class Restaurantslist extends Component {
  constructor() {
    super();
    this.state = {
      area: "",
      count: 1234,
      restaurants: []
    };
  }

  componentDidMount = () => {
    this.state.restaurants = this.getRests();
  };

  getRests = async () => {
    var user_area = await localStorage.getItem("selectedArea");
    this.setState({
      area: user_area
    });
    // console.log(dic[this.state.area]);
    // console.log("selected area is :" + user_area);
    // var result = await fetch(
    //   "http://localhost:5000/api/restaurants?area=mirdamad",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }
    // );
    // if (!result.ok) {
    //   throw Error(result.statusText);
    // }
    // console.log(result.text());
    // let jsonRes = await result.text();

    // let finalResult = JSON.parse(jsonRes);
    // console.log(finalResult);
  };

  // handleCheckbox = async () => {
  //   var doc = document.getElementsByTagName();

  // };

  reply_click(event) {
    // console.log(event.target.id);
    localStorage.setItem("selectedRestaurant", event.target.id);
  }
  render() {
    return (
      <div className="landing-all">
        <div className="toppic">
          <img src={toppic} alt="toppic" id="toppic" />
        </div>
        <div className="description">
          الان {this.state.count} رستوران قابلیت سرویس دهی به{" "}
          {dic[this.state.area]} را دارند
        </div>
        <div className="divsearch">
          <input
            placeholder="جست و جوی رستوران در این محدوده"
            className="allsearch"
          />
          <i className="fas fa-search allser" />
        </div>
        <div className="allsecond">
          <div className="allrests">
            <div className="allrest">
              <div className="name">دان تان</div>
              <div className="allstarbox">
                <span className="after">4.5</span>
                <span className="allstar fa fa-star" />
                <span className="allstar fa fa-star" />
                <span className="allstar fa fa-star" />
                <span className="allstar fa fa-star" />
                <span className="allstar fa fa-star" />
              </div>
              <div className="categoris">
                <span className="category">فست فود</span>
                <span>&bull;</span>
                <span className="category">پیتزا</span>
                <span>&bull;</span>
                <span className="category">برگر</span>
                <span>&bull;</span>
                <span className="category">ساندویچ</span>
              </div>
              <address
                title="بلوار اندرزگو، بین کاوه و قیطریه، نبش مهر محمدی جنوبی"
                className="XhgA9"
              >
                بلوار اندرزگو، بین کاوه و قیطریه، نبش مهر محمدی
              </address>
              <div className="orderdiv">
                <a
                  className="orderbutton"
                  id="vitrin"
                  href="/restaurant"
                  onClick={this.reply_click}
                >
                  شروع سفارش
                </a>
              </div>
            </div>
          </div>
          <div className="allcatlist">
            <div className="allcat">
              <label className="container">
                کباب
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="allcat">
              <label className="container">
                غذای ایرانی
                <input type="checkbox" />
                {/* onChange={this.handleCheckbox} */}
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurantslist;
