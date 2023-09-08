import React from "react";
import bookLogo from "../assets/bookLogo.png";
import SearchBar from "./SearchBar/SearchBar";
import Sort from "./Sort";
import Categories from "./Categories";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <div className="headerLogo">
            <img width="55" src={bookLogo} alt="logo" />
          </div>
          <div className="discription">
            <h1>Books</h1>
            <p>What would you like to read today?</p>
          </div>
        </div>
        <SearchBar />
        <Sort />
      </div>
      <Categories />
    </div>
  );
};

export default Header;
