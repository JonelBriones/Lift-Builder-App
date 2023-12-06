import React from "react";
import "./header.css";
import Navbar from "../Navbar/Navbar.component";
import { DEFAULT_DATA } from "../../DefaultData";
const Header = () => {
  const { programName, headerPictures } = DEFAULT_DATA;

  return (
    <div className="wrapper">
      <Navbar />
      <header className="header">
        <img src={headerPictures[0]} alt="" />
        <div className="header-container">
          <h1>{programName} Program</h1>
          <p>Powered by LiftBuilder</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
