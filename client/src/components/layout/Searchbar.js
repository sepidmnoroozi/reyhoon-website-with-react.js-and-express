import React, { Component } from "react";
import Select from "react-select";
import homepic from "/home/mnoroozi/final-project/backend/client/src/img/home.png";
import foodpic from "/home/mnoroozi/final-project/backend/client/src/img/food.png";

const areaOptions = [
  { value: "vanilla", label: "Vanilla", rating: "safe" },
  { value: "chocolate", label: "Chocolate", rating: "good" },
  { value: "strawberry", label: "Strawberry", rating: "wild" },
  { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" }
];

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      options: []
    };
  }

  initilize_options = async () => {
    var result = await fetch(
      "http://localhost:5000/api/restaurants/area/select",
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
    var temp = [];
    let i = 0;
    for (i = 0; i < finalResult.length; i++) {
      temp.push({
        value: finalResult[i],
        label: finalResult[i],
        rating: "areas"
      });
    }
    this.setState({
      options: temp
    });
  };

  onMenuOpen = () => {
    console.log("hellooo");
    setTimeout(() => {
      this.initilize_options();
    }, 1000);
  };
  handleSubmit = async selected => {
    console.log(selected);
    localStorage.setItem("selectedArea", selected.label);
  };

  render() {
    const { options } = this.state;
    const { onMenuOpen } = this;
    // this.initilize_options();
    return (
      <div className="intro">
        <div className="innerintro">
          <img src={foodpic} id="foodpic" alt="bgsearch" />
        </div>
        <div className="searchbar">
          <img src={homepic} id="home" alt="home" />
          <p id="intro1">سفارش آنلاین غذا از بهترین رستورانها و فست فودها</p>
          <p id="intro2">
            برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند،
            منطقه خود را وارد کنید
          </p>
          <div className="dropboxes">
            <div className="drop1">
              <div id="input_container1">
                <a id="searchbarbutt" href="/restaurantslist">
                  <i className="fas fa-search intro_icon1_1" />
                </a>
                <Select
                  defaultValue={[options[2], options[3]]}
                  onChange={this.handleSubmit}
                  name="colors"
                  onMenuOpen={onMenuOpen}
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />

                <i className="fas fa-map-marker-alt intro_icon1_2" />
              </div>
              <datalist id="regions">
                <option value="نیاوران" />
                <option value="یوسف آباد" />
                <option value="ولیعصر" />
                <option value="شوش" />
                <option value="باغ کتاب" />
                <option value="میرداماد" />
              </datalist>
            </div>
            <div className="drop2">
              <div id="input_container2">
                <input
                  id="input2"
                  list="cities"
                  name="citydrop"
                  placeholder="تهران"
                />
                <i className="fas fa-angle-down intro_icon2" />
              </div>
              <datalist id="cities">
                <option value="شیراز" />
                <option value="مشهد" />
                <option value="اصفهان" />
                <option value="تبریز" />
                <option value="کرمانشاه" />
                <option value="بجنورد" />
              </datalist>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
