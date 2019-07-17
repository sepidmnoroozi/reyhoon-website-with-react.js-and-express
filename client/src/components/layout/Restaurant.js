import React, { Component } from "react";
import bgpic from "/home/mnoroozi/final-project/backend/client/src/img/bgpic.jpg";
import vitrin from "/home/mnoroozi/final-project/backend/client/src/img/op1.jpeg";
import map from "/home/mnoroozi/final-project/backend/client/src/img/map.jpg";
import "/home/mnoroozi/final-project/backend/client/src/App.css";

var sectionStyle = {
  width: "100%",
  height: "250px",
  backgroundImage: "url(" + bgpic + ")"
};

const dic = {
  salad: "سالاد",
  kebab: "کباب",
  fastfood: "فست فود",
  burger: "برگر",
  pizza: "پیتزا"
};

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      addressline: "",
      opentime: 0,
      closetime: 0,
      foods: [],
      comments: [],
      rating: 0,
      logo: "",
      categorieslist: [],
      cats: "",
      address: ""
    };
  }
  async componentDidMount() {
    var ah = localStorage.getItem("selectedRestaurant");
    this.setState({
      id: ah
    });
    console.log(ah);
    await this.getRest();
  }

  getRest = async () => {
    var ah = localStorage.getItem("selectedRestaurant");
    console.log("ah is : " + ah);
    this.setState({
      id: ah
    });
    // var name = await this.state.id;
    console.log("ah lanati" + this.state.id);
    var result = await fetch("http://localhost:3002/api/restaurants/" + ah, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    // console.log(result);
    let jsonRes = await result.text();
    let finalResult = JSON.parse(jsonRes);
    console.log("bia an " + finalResult);
    console.log("name is" + finalResult["name"]);
    console.log(finalResult["address"]);

    this.setState({
      id: finalResult["id"],
      name: finalResult["name"],
      addressline: finalResult["address"]["addressLine"],
      opentime: finalResult["openingTime"],
      closetime: finalResult["closingTime"],
      foods: finalResult["foods"],
      comments: finalResult["comments"],
      rating: finalResult["averageRate"],
      logo: finalResult["logo"],
      categories: finalResult["categories"],
      cats: ""
    });

    console.log("state is  : " + this.state);
    this.loadfoods(finalResult["foods"]);
    this.loadcomments(finalResult["comments"]);
    this.generatecat();
  };

  generatecat = () => {
    var st = "";
    for (let i = 0; i < this.state.categories.length; i++) {
      // const element = array[i];
      if (i == this.state.categories.length) {
        st = st + this.state.categories[i]["name"];
      } else {
        st = st + this.state.categories[i]["name"];
      }
    }
    this.setState({
      cats: st
    });
  };
  loadcomments = a => {
    var com = a;
    // <div className="peoplecomments">
    //   <div className="comment">
    //     <p className="username">اکبر</p>
    //     <div className="commentrate">
    //       <span className="after">4.5</span>
    //       <span className="fa fa-star" />
    //       <span className="fa fa-star" />
    //       <span className="fa fa-star" />
    //       <span className="fa fa-star" />
    //       <span className="fa fa-star" />
    //     </div>
    //     <p className="commenttxt">سرد بود خیلی</p>
    //   </div>
    // </div>;
    var peoplecomments = document.getElementsByClassName("peoplecomments")[0];
    while (peoplecomments.hasChildNodes()) {
      peoplecomments.removeChild(peoplecomments.lastChild);
    }

    for (let i = 0; i < com.length; i++) {
      // const element = array[i];
      var comment = document.createElement("div");
      comment.className = "comment";

      var pname = document.createElement("p");
      pname.className = "username";
      pname.innerHTML = com[i]["author"];

      var commentrate = document.createElement("div");
      commentrate.className = "commentrate";

      var after = document.createElement("span");
      after.className = "after";
      after.innerHTML = (com[i]["deliveryTime"] + com[i]["packaging"]) / 2;

      var star1 = document.createElement("span");
      var star2 = document.createElement("span");
      var star3 = document.createElement("span");
      var star4 = document.createElement("span");
      var star5 = document.createElement("span");
      star1.className = "fa fa-star";
      star2.className = "fa fa-star";
      star3.className = "fa fa-star";
      star4.className = "fa fa-star";
      star5.className = "fa fa-star";

      commentrate.appendChild(after);
      commentrate.appendChild(star1);
      commentrate.appendChild(star2);
      commentrate.appendChild(star3);
      commentrate.appendChild(star4);
      commentrate.appendChild(star5);

      var ptxt = document.createElement("p");
      ptxt.className = "commenttxt";
      ptxt.innerHTML = com[i]["text"];

      comment.appendChild(pname);
      comment.appendChild(pname);
      comment.appendChild(commentrate);
      comment.appendChild(ptxt);

      peoplecomments.appendChild(comment);
    }
  };

  handleSearchRes = e => {
    console.log(e.target.value);
    var Input = e.target.value;
    var res = [];
    var currentfoods = this.state.foods;
    for (var i = 0; i < currentfoods.length; i++) {
      if (currentfoods[i]["name"].includes(Input)) {
        console.log("bia : " + currentfoods[i]);
        res.push(currentfoods[i]);
      }
    }
    console.log(res);
    this.loadfoods(res);
  };

  loadfoods(a) {
    var rest = a;
    console.log("hiiiiiiiiiiiiiiiii");
    var catfoods = document.getElementsByClassName("catfoods")[0];
    while (catfoods.hasChildNodes()) {
      catfoods.removeChild(catfoods.lastChild);
    }

    var foods = a;
    var categories = this.state.categories;
    console.log("foods " + foods);
    console.log("categor " + categories);

    for (let i = 0; i < categories.length; i++) {
      var cat = document.createElement("div");
      cat.className = "cat";

      var p = document.createElement("p");
      p.id = categories[i]["id"];
      p.innerHTML = categories[i]["name"];

      var fooditems = document.createElement("div");
      fooditems.className = "fooditems";

      for (let j = 0; j < foods.length; j++) {
        // const element = array[j];
        if (foods[j]["foodSet"] == categories[i]["id"]) {
          var food = document.createElement("div");
          food.className = "food";

          var p1 = document.createElement("p");
          p1.innerHTML = foods[j]["name"];

          var p2 = document.createElement("p");
          p2.innerHTML =
            foods[j]["description"] +
            foods[j]["description"] +
            foods[j]["description"];

          var butt = document.createElement("button");
          butt.className = "orderbutton";
          butt.innerHTML = "شروع سفارش";

          food.appendChild(p1);
          food.appendChild(p2);
          food.appendChild(butt);
          fooditems.appendChild(food);
        }
      }

      cat.appendChild(p);
      cat.appendChild(fooditems);
      catfoods.appendChild(cat);
    }

    // <div className="catlist">
    //           <a className="restpagecatitem" href="#burgur">
    //             استیک
    //           </a>
    //           <a className="restpagecatitem">غذا</a>
    //           <a className="restpagecatitem">غذای ایرانی</a>
    //           <a className="restpagecatitem">فست فود</a>
    //           <a className="restpagecatitem">سالاد</a>
    //           <a className="restpagecatitem">کباب</a>
    //         </div>
    var catlist = document.getElementsByClassName("catlist")[0];
    while (catlist.hasChildNodes()) {
      catlist.removeChild(catlist.lastChild);
    }
    for (let i = 0; i < categories.length; i++) {
      // const element = array[i];
      var acat = document.createElement("a");
      acat.className = "restpagecatitem";
      acat.href = "#" + categories[i]["id"];
      acat.innerHTML = categories[i]["name"];
      catlist.appendChild(acat);
    }
  }

  render() {
    return (
      <div className="Landing">
        <div className="restinfo" style={sectionStyle}>
          <div className="introrest">
            <div className="firstpart">
              <div className="respic">
                <img src={this.state.logo} alt="vitrin" id="restpic" />
              </div>
              <p>{this.state.name}</p>
              <div className="ratingbox">
                <span className="before">({this.state.comments.length})</span>
                <div className="star-rate">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <span className="after">{this.state.rating}</span>
              </div>
              <div className="categoris">
                <span className="category">{this.state.cats}</span>
              </div>
              <address title={this.state.addressline} className="XhgA9" />
            </div>
            <div className="tabbar">
              <div className="tab">
                <a className="innertab" href="#userscomments">
                  نظرات کاربران
                </a>
              </div>
              <div className="tab">
                <a className="innertab" href="#information">
                  اطلاعات رستوران
                </a>
              </div>
              <div className="tab">
                <a className="innertab" href="#foodmenu">
                  منوی رستوران
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="secondpart">
          <div className="menuSearch">
            <input
              className="searchInput"
              placeholder="جست و جو در منوی این رستوران"
              onChange={this.handleSearchRes}
            />
            <i className="fas fa-search" />
          </div>
          <div className="foods" id="foodmenu">
            <div className="catfoods">
              <div className="cat">
                <p id="pizza">پیتزا</p>
                <div className="fooditems">
                  <div className="food">
                    <p>پیتزا رومینو</p>
                    <p>
                      سس مارگاریتا کوفت درد مرض زهر ماد بمیری الهی اه مرگ موش
                      یرقان
                    </p>
                    <button className="orderbutton">افزودن به سبد خرید</button>
                  </div>
                  {/* <div className="food">
                    <p className="foodname">پیتزا رومینو استیک</p>
                    <p className="price"> تومان 38000 </p>
                    <p>
                      سس مارگاریتا کوفت درد مرض زهر ماد بمیری الهی اه مرگ موش
                      یرقان
                    </p>
                    <button>افزودن به سبد خرید</button>
                  </div> */}
                </div>
              </div>
              <div className="cat">
                <p id="burgur">برگر</p>
                <div className="fooditems">
                  <div className="food">
                    <p>پیتزا گه </p>
                    <p>
                      سس مارگاریتا کوفت درد مرض زهر ماد بمیری الهی اه مرگ موش
                      یرقان
                    </p>
                    <button>افزودن به سبد خرید</button>
                  </div>
                  <div className="food">
                    <p>پیتزا رومینو</p>
                    <p>
                      سس مارگاریتا کوفت درد مرض زهر ماد بمیری الهی اه مرگ موش
                      یرقان
                    </p>
                    <button>افزودن به سبد خرید</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="catlist">
              <a className="restpagecatitem" href="#burgur">
                استیک
              </a>
              <a className="restpagecatitem">غذا</a>
              <a className="restpagecatitem">غذای ایرانی</a>
              <a className="restpagecatitem">فست فود</a>
              <a className="restpagecatitem">سالاد</a>
              <a className="restpagecatitem">کباب</a>
            </div>
          </div>
          <h1 class="hinfo" id="information">
            اطلاعات رستوران
          </h1>
          <div className="info">
            <img className="mapimg" src={map} />
            <h5>{this.state.name}</h5>
            <div>
              <i class="fas fa-map-marker-alt" />
              <span className="add">{this.state.addressline}</span>
            </div>
            <div>
              <i class="fas fa-clock" />
              <span>ساعت سفارش گیری</span>
            </div>
            <div className="timediv">
              همه روزه
              <span className="time">
                از {this.state.opentime} تا {this.state.closetime}
              </span>
            </div>
          </div>
          {/* <div className="restinformation" /> */}
          <h1 class="hinfo" id="userscomments">
            {" "}
            نظرات کاربران در مورد {this.state.name}
          </h1>
          <p className="commdes">
            شما هم میتوانید پس از سفارش از این رستوران نظر دهید
          </p>
          <div className="resRating">
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
          <div className="resRating number">4.5</div>
          <div className="peoplecomments">
            <div className="comment">
              <p className="username">اکبر</p>
              <div className="commentrate">
                <span className="after">4.5</span>
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <p className="commenttxt">سرد بود خیلی</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
