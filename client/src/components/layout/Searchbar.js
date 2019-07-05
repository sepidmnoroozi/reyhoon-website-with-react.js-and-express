import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import homepic from "/home/mnoroozi/final-project/backend/client/src/img/home.png";
import foodpic from "/home/mnoroozi/final-project/backend/client/src/img/food.png";
class Searchbar extends Component {
  render() {
    return (
      <div class="intro">
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
          <div class="dropboxes">
            <div class="drop1">
              <div id="input_container1">
                <a id="searchbarbutt" href="/restaurantslist">
                  <i class="fas fa-search intro_icon1_1" />
                </a>
                {/* <input
                  id="input1"
                  list="regions"
                  name="regiondrop"
                  placeholder="مثلا نیاوران"
                /> */}
                <AsyncSelect
                  id="input1"
                  cacheOptions
                  onInputChange={this.handleInputChange}
                  placeholder="مثلا نیاوران"
                />

                <i class="fas fa-map-marker-alt intro_icon1_2" />
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
            <div class="drop2">
              <div id="input_container2">
                <input
                  id="input2"
                  list="cities"
                  name="citydrop"
                  placeholder="تهران"
                />
                <i class="fas fa-angle-down intro_icon2" />
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
