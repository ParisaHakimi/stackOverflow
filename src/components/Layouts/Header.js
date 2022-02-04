import React from "react";
import logo from "./StackOverflow.png";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logoLink">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <ul className="menu">
        <li className="about">
          <a href="/">About</a>
        </li>
        <li className="products">
          <a href="/">Products</a>
        </li>
        <li className="forTeams">
          <a href="/">For Teams</a>
        </li>
      </ul>
      <form action="" className="search-input" id="search-btn">
        <input type="text" placeholder="&#128269; Search..." />
        <button className="search-btn">&#128269;</button>
      </form>
      <ul className="register-btn">
        <li>
          <a href="/login" className="logIn-btn btn">
            Log in
          </a>
        </li>
        <li>
          <a href="/signup" className="signUp-btn btn">
            Sign up
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
