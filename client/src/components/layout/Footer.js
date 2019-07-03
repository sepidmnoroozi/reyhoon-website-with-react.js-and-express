import React, { Component } from "react";
import googleplaydark from "/home/mnoroozi/final-project/backend/client/src/img/googleplaydark.png";
import sibappdark from "/home/mnoroozi/final-project/backend/client/src/img/sibappdark.png";
import cafebazaardark from "/home/mnoroozi/final-project/backend/client/src/img/cafebazaardark.png";
import logo2 from "/home/mnoroozi/final-project/backend/client/src/img/logo2.png";
import logo1 from "/home/mnoroozi/final-project/backend/client/src/img/logo1.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bottombar">
          <div className="bottom-grid">
            <div className="bottomitem bottomitem1">
              <h4>اپلیکیشن های موبایل</h4>
              <a>
                <img src={googleplaydark} />
              </a>
              <a>
                <img src={sibappdark} />
              </a>
              <a>
                <img src={cafebazaardark} />
              </a>
            </div>
            <div className="bottomitem bottomitem2">
              <h4>پشتیبانی ریحون</h4>
              <a href=" ">سوالات متداول</a>
              <a href=" ">تماس با پشیبانی</a>
              <a href=" ">قوانین و مقررات</a>
            </div>
            <div className="bottomitem bottomitem3">
              <h4>رستوران ها</h4>
              <a href=" ">ثبت رستوران</a>
            </div>
            <div className="bottomitem bottomitem4">
              <h4>تماس با ریحون</h4>
              <a href=" ">درباره ریحون</a>
              <a href=" ">تماس با ما</a>
              <a href=" ">وبلاگ ریحون</a>
            </div>
            <div className="bottomitem bottomitem5">
              <p>
                مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر
                است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار
                رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و
                سفارش دهید
              </p>
              <a href=" ">لیست رستوران ها</a>
            </div>
          </div>
          <div className="logobar">
            <div className="logo">
              <img src={logo2} />
            </div>
            <div className="logo">
              <img src={logo1} />
            </div>
          </div>
        </div>
        <div className="socialmedia">
          <div className="icons">
            <a href=" ">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href=" ">
              <i className="fab fa-instagram" />
            </a>
            <a href=" ">
              <i className="fab fa-twitter" />
            </a>
            <a href=" ">
              <i className="fab fa-facebook-f" />
            </a>
            <a href=" ">
              <i className="fab fa-telegram-plane" />
            </a>
          </div>
          <div className="socialtext">
            © 2017, Reyhoon, All Rights Reserved.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
