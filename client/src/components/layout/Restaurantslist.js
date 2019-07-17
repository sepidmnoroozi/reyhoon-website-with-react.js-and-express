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
  };

  async getRests() {
    var user_area = await localStorage.getItem("selectedArea");
    this.setState({
      area: user_area
    });
    var result = await fetch(
      "http://localhost:3002/api/restaurants?area=" + user_area,
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
    console.log("haha1");
    this.loadContent(finalResult);
    console.log("haha2");
  }

  loadContent(a) {
    var restslist = a;
    var hours = new Date().getHours(); //Current Hours
    console.log("now : " + hours);
    var openclosed = document.getElementsByClassName("open-closed")[0];
    while (openclosed.hasChildNodes()) {
      openclosed.removeChild(openclosed.lastChild);
    }

    var tmpclosed = [];
    var tmpopen = [];
    for (let index = 0; index < restslist.length; index++) {
      console.log(
        restslist[index]["name"] + "open" + restslist[index]["openingTime"]
      );
      console.log(
        restslist[index]["name"] + "close" + restslist[index]["closingTime"]
      );
      if (
        restslist[index]["openingTime"] <= hours &&
        restslist[index]["closingTime"] >= hours
      ) {
        tmpopen.push(restslist[index]);
      } else {
        tmpclosed.push(restslist[index]);
      }
    }
    console.log(tmpopen);
    console.log(tmpclosed);

    if (tmpopen.length > 0) {
      console.log("we got here!");
      var div1 = document.createElement("div");
      div1.className = "restsopen";
      openclosed.appendChild(div1);
      for (let index = 0; index < tmpopen.length; index++) {
        // const element = tmpopen[index];
        var div2 = document.createElement("div");
        div2.className = "allrestopen";

        var div3 = document.createElement("div");
        div3.id = "uppart";
        div2.appendChild(div3);
        var div5 = document.createElement("div");
        div5.id = "leftpart";
        div3.appendChild(div5);
        var div6 = document.createElement("div");
        div6.className = "name";

        var div7 = document.createElement("h3");
        div7.innerHTML = tmpopen[index]["name"];
        div6.appendChild(div7);

        var div8 = document.createElement("div");
        div8.className = "allstarbox";

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
        div8.appendChild(div9);
        div8.appendChild(div10);
        div8.appendChild(div11);
        div8.appendChild(div12);
        div8.appendChild(div13);
        div8.appendChild(div14);

        var div15 = document.createElement("div");
        div15.className = "categoris";

        var cats = tmpopen[index]["categories"];
        for (let i = 0; i < cats.length; i++) {
          // const element = cats[i];
          if (i != 0) {
            var span1 = document.createElement("span");
            span1.innerHTML = cats[i]["name"];
            var span2 = document.createElement("span");
            span2.innerHTML = "&bull;";
            div15.appendChild(span2);
            div15.appendChild(span1);
          } else {
            var span3 = document.createElement("span");
            span3.innerHTML = cats[i]["name"];
            div15.appendChild(span3);
          }
        }

        var div16 = document.createElement("address");
        div16.title = tmpopen[index]["address"]["addressLine"];

        div5.appendChild(div6);
        div5.appendChild(div8);
        div5.appendChild(div15);
        div5.appendChild(div16);

        var rightpart = document.createElement("div");
        rightpart.className = "rightpart";
        div3.appendChild(rightpart);

        var rpimg = document.createElement("img");
        rpimg.alt = "allrestpic";
        rpimg.src = "/" + tmpopen[index]["logo"];
        rightpart.appendChild(rpimg);

        var orderdiv = document.createElement("div");
        orderdiv.className = "orderdiv";

        var oda = document.createElement("a");
        oda.className = "orderbutton";
        oda.id = tmpopen[index]["id"];
        oda.href = "/restaurant";
        oda.onclick = this.reply_click;

        oda.innerHTML = "شروع سفارش";

        orderdiv.appendChild(oda);
        div2.appendChild(orderdiv);
        div1.appendChild(div2);
      }
    }

    if (tmpclosed.length > 0) {
      console.log("we got here in closed!");
      var div1close = document.createElement("div");
      div1close.className = "restsclose";
      var h3 = document.createElement("h3");
      h3.id = "closedones";
      h3.innerHTML = "رستوران های بسته";
      openclosed.appendChild(h3);
      openclosed.appendChild(div1close);

      for (let index = 0; index < tmpclosed.length; index++) {
        // const element = tmpopen[index];
        var div2close = document.createElement("div");
        div2close.className = "allrestclose";

        var div3close = document.createElement("div");
        div3close.id = "uppart";
        div2close.appendChild(div3close);
        var div5close = document.createElement("div");
        div5close.id = "leftpart";
        div3close.appendChild(div5close);
        var div6close = document.createElement("div");
        div6close.className = "name";

        var div7close = document.createElement("h3");
        div7close.innerHTML = tmpclosed[index]["name"];
        div6close.appendChild(div7close);

        var div8close = document.createElement("div");
        div8close.className = "allstarbox";

        var div9close = document.createElement("span");
        div9close.className = "after";
        div9close.innerHTML = tmpclosed[index]["averageRate"];

        var div10close = document.createElement("span");
        div10close.className = "allstar fa fa-star";

        var div11close = document.createElement("span");
        div11close.className = "allstar fa fa-star";

        var div12close = document.createElement("span");
        div12close.className = "allstar fa fa-star";

        var div13close = document.createElement("span");
        div13close.className = "allstar fa fa-star";

        var div14close = document.createElement("span");
        div14close.className = "allstar fa fa-star";
        div8close.appendChild(div9close);
        div8close.appendChild(div10close);
        div8close.appendChild(div11close);
        div8close.appendChild(div12close);
        div8close.appendChild(div13close);
        div8close.appendChild(div14close);

        var div15close = document.createElement("div");
        div15close.className = "categoris";

        var catsclose = tmpclosed[index]["categories"];
        for (let i = 0; i < catsclose.length; i++) {
          // const element = cats[i];
          if (i != 0) {
            var span1close = document.createElement("span");
            span1close.innerHTML = catsclose[i]["name"];
            var span2close = document.createElement("span");
            span2close.innerHTML = "&bull;";
            div15close.appendChild(span2close);
            div15close.appendChild(span1close);
          } else {
            var span3close = document.createElement("span");
            span3close.innerHTML = catsclose[i]["name"];
            div15close.appendChild(span3close);
          }
        }

        var div16close = document.createElement("address");
        div16close.title = tmpclosed[index]["address"]["addressLine"];

        div5close.appendChild(div6close);
        div5close.appendChild(div8close);
        div5close.appendChild(div15close);
        div5close.appendChild(div16close);

        var rightpartclose = document.createElement("div");
        rightpartclose.className = "rightpart";
        div3close.appendChild(rightpartclose);

        var rpimgclose = document.createElement("img");
        rpimgclose.alt = "allrestpic";
        rpimgclose.src = "/" + tmpclosed[index]["logo"];
        // img.src = "{ require(" + src + ") }"
        rightpartclose.appendChild(rpimgclose);

        div1close.appendChild(div2close);
      }
    }
  }
  // handleCheckbox = async () => {
  //   var doc = document.getElementsByTagName();

  // };

  reply_click = event => {
    // console.log(event.target.id);
    localStorage.setItem("selectedRestaurant", event.target.id);
  };

  handleSearchRes = e => {
    console.log(e.target.value);
    var Input = e.target.value;
    var res = [];
    var currentrests = this.state.restaurants;
    for (var i = 0; i < currentrests.length; i++) {
      if (currentrests[i]["name"].includes(Input)) {
        console.log("bia : " + currentrests[i]);
        res.push(currentrests[i]);
      }
    }
    console.log(res);
    this.loadContent(res);
  };
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
            onChange={this.handleSearchRes}
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
                      <h3>دان تان </h3>
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
                      <h3>دان تان </h3>
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
            <p className="allcatlisttitle">فیلتر بر اساس انواع غذا</p>
            <input
              className="allcatsearchbar"
              placeholder="جست‌و‌‌جو در دسته بندی غذاها"
              // onChange={this.handleChangeCategory}
            />
            <div className="selected" />
            <div className="not selected">
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
      </div>
    );
  }
}

export default Restaurantslist;
