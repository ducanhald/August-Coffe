import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="../assets/imgs/logo.png"
          className="header__img-logo"
          alt=""
        />
      </div>
      <div className="header__menu">
        <ul className="nav">
          <li>
            <a href="https://www.facebook.com/anhs0708/">Home</a>
          </li>
          <li>
            <a href="https://www.facebook.com/anhs0708/">About</a>
          </li>
          <li>
            <a href="https://www.facebook.com/anhs0708/">Product</a>
          </li>
          <li>
            <a href="https://www.facebook.com/anhs0708/">Service</a>
          </li>
        </ul>
      </div>
      <div className="header__search">
        <input type="text" className="input-search" placeholder="Search ..." />
        <img src="./assets/imgs/search.png" className="img-search" alt="" />
        <div className="div-menu">
          <i className="ti-menu-alt s-icon-menu"></i>
        </div>
      </div>
    </div>
  );
}
export default Header;
