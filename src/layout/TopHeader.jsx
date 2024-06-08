import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-pink.png";
import Button from "../components/Button";

import style from "./Header.module.css";

const TopHeader = () => {
  return (
    <div className={`${style.topHeader} wrapper`}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Pink Logo" />
        </Link>
      </div>
      <div className="quote">
        <Link to="/quots">
          <Button text="Request quot" />
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
