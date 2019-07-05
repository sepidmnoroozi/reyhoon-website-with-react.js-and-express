import React, { Component } from "react";
import toppic from "/home/mnoroozi/final-project/backend/client/src/img/toppic.jpg";
import restpic from "/home/mnoroozi/final-project/backend/client/src/img/jo.jpeg";
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
      count: 0,
      restaurants: [],
      closedRestaurants: [],
      openRestaurants: []
    };
  }

  componentDidMount = () => {
    this.getRests();
    // loadrestaurants();
  };

  async getRests() {
    var user_area = await localStorage.getItem("selectedArea");
    this.setState({
      area: user_area
    });
    var result = await fetch(
      "http://localhost:5000/api/restaurants?area=" + user_area,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    // console.log(result);
    let jsonRes = await result.text();
    let finalResult = JSON.parse(jsonRes);
    console.log(finalResult);
    console.log(finalResult[2]["id"]);
    console.log(finalResult[2]["foods"].length);
    console.log(finalResult.length);
    this.setState({
      restaurants: finalResult,
      count: finalResult.length
    });
    this.loadContent(this.state.restaurants);
  }

  loadContent(a) {
    var restslist = a;
    var hours = new Date().getHours(); //Current Hours
    var openclosed = document.getElementsByClassName("open-closed")[0];
    while (openclosed.hasChildNodes()) {
      openclosed.removeChild(openclosed.lastChild);
    }

    var tmpclosed = [];
    var tmpopen = [];
    for (let index = 0; index < restslist.length; index++) {
      if (
        restslist[index]["openingTime"] < hours &&
        restslist[index]["closingTime"] > hours
      ) {
        tmpopen.push(restslist[index]);
      } else {
        tmpclosed.push(restslist[index]);
      }
    }

    if (tmpopen.length > 0) {
      var div1 = document.createElement("div");
      div1.className = "restsopen";
      openclosed.appendChild(div1);
      for (let index = 0; index < tmpopen.length; index++) {
        // const element = tmpopen[index];
        var div2 = document.createElement("div");
        div2.className = "allrestopen";
        div2.appendChild(div3);
        //

        var div3 = document.createElement("div");
        div3.id = "uppart";
        div3.appendChild(div5);
        //

        var div5 = document.createElement("div");
        div5.id = "leftpart";
        div5.appendChild(div6);

        div5.appendChild(div8);
        div5.appendChild(div15);
        div5.appendChild(div16);

        var div6 = document.createElement("div");
        div6.className = "name";

        var div7 = document.createElement("h1");
        div7.innerHTML = tmpopen[index]["name"];
        div6.appendChild(div7);

        var div8 = document.createElement("div");
        div8.className = "allstarbox";
        div8.appendChild(div9);
        div8.appendChild(div10);
        div8.appendChild(div11);
        div8.appendChild(div12);
        div8.appendChild(div13);
        div8.appendChild(div14);

        var div9 = document.createElement("span");
        div9.className = "after";
        div9.innerHTML = tmpopen[index]["averageRate"];

        var div10 = document.createElement("span");
        div10.className = "allstar fa fa-star";

        var div11 = document.createElement("span");
        div11.className = "allstar fa fa-star";

        var div12 = document.createElement("span");
        div12.className = "allstar fa fa-star";

        var div13 = document.createElement("span");
        div13.className = "allstar fa fa-star";

        var div14 = document.createElement("span");
        div14.className = "allstar fa fa-star";

        var div15 = document.createElement("div");
        div15.className = "categoris";

        var cats = tmpopen[index]["categories"];
        for (let i = 0; i < cats.length; i++) {
          // const element = cats[i];
          if (i < cats.length - 1) {
            var span1 = document.createElement("span");
            span1.innerHTML = cats[i];
            var span2 = document.createElement("span");
            span2.innerHTML = "&bull;";
            div15.appendChild(span1);
            div15.appendChild(span2);
          } else {
            var span1 = document.createElement("span");
            span1.innerHTML = cats[i];
            div15.appendChild(span1);
          }
        }

        var div16 = document.createElement("address");
        div16.title = tmpopen[index]["address"]["addressLine"];
      }
    }
  }
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
          <div className="open-closed">
            <div className="restsopen">
              <div className="allrestopen">
                <div id="uppart">
                  <div id="leftpart">
                    <div className="name">
                      <h1>دان تان </h1>
                    </div>
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
                  </div>
                  <div id="rightpart">
                    <img src={restpic} alt="allrestpic" />
                  </div>
                </div>
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
            <h3 id="closedones">رستوران های بسته</h3>
            <div className="restsclose">
              <div className="allrestclose">
                <div id="uppart">
                  <div id="leftpart">
                    <div className="name">
                      <h1>دان تان </h1>
                    </div>
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
                  </div>
                  <div id="rightpart">
                    <img src={restpic} alt="allrestpic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="allcatlist">
            <div className="allcat">
              <label className="container">
                کباب
                <input type="checkbox" id="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="allcat">
              <label className="container">
                غذای ایرانی
                <input type="checkbox" id="checkbox" />
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
