import React, { Component } from "react";
import bgpic from "/home/mnoroozi/final-project/backend/client/src/img/bgpic.jpg";
import vitrin from "/home/mnoroozi/final-project/backend/client/src/img/op1.jpeg";
// import map from "/home/mnoroozi/final-project/backend/client/src/img/map.jpg";
import "/home/mnoroozi/final-project/backend/client/src/App.css";

class Restaurant extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="restinfo">
          <img src={bgpic} alt="bgpic" id="bgpic" />
        </div>
        <div className="introrest">
          <div className="firstpart">
            <div className="respic">
              <img src={vitrin} alt="vitrin" id="restpic" />
            </div>
            <p>vitrin</p>
            <div className="ratingbox">
              <span className="before">(81)</span>
              <div className="star-rate">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <span className="after">3</span>
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
          <div className="tabbar">
            <div className="tab">
              <button className="innertab">منوی رستوران</button>
            </div>
            <div className="tab">
              <button className="innertab">اطلاعات رستوران</button>
            </div>
            <div className="tab">
              <button className="innertab">نظرات کاربران</button>
            </div>
          </div>
        </div>
        <div className="secondpart">
          <div className="menuSearch">
            <input
              className="searchInput"
              placeholder="جست و جو در منوی این رستوران"
            />
            <i class="fas fa-search" />
          </div>
          <div className="foods">
            <div className="catfoods">
              <div className="cat">
                <p>پیتزا</p>
                <div className="fooditems">
                  <div className="food">
                    <p>پیتزا رومینو</p>
                    <p>
                      سس مارگاریتا کوفت درد مرض زهر ماد بمیری الهی اه مرگ موش
                      یرقان
                    </p>
                    <button>افزودن به سبد خرید</button>
                  </div>
                  <div className="food">
                    <p className="foodname">پیتزا رومینو استیک</p>
                    <p className="price"> تومان 38000 </p>
                    <p>
                      سس مارگاریتا کوفت درد مرض زهر ماد بمیری الهی اه مرگ موش
                      یرقان
                    </p>
                    <button>افزودن به سبد خرید</button>
                  </div>
                </div>
              </div>
              <div className="cat">
                <p>برگر</p>
                <div className="fooditems">
                  <div className="food">
                    <p>پیتزا رومینو</p>
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
              <div className="innercatlist">
                <div>استیک</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
                <div>غذا</div>
              </div>
            </div>
          </div>
          <div className="info">
            <h1 class="hinfo">اطلاعات رستوران</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
