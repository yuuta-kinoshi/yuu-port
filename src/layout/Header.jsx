import { Link } from "react-router-dom";
import React from "react";
import Icon from "../assets/icon.jpeg";
import style from "./Header.module.css";

const Header = () => {
    return (
      <header>
        <div className={style.wrapper}>
          
          <div className={style.bunner}>
            <h1>FRONT-END</h1>
            <h3>Web Developer</h3>
            <img src={Icon} alt="" />
          </div>
          <div className={style.bottomContent}>
            <h2>Yuu Dev</h2>
            <p>
              Front-end developer: building web applications with modern tools and
              efficiency - Not by ChatGPT, by a Developer.
            </p>
            <nav className={style.links}>
              <ul>
                <li className={style.routes}>
                  <Link to="/">HOME</Link>
                </li>
                <li className={style.routes}>
                  <Link to="/projects">PROJECTS</Link>
                </li>
                <li className={style.routes}>
                  <Link to="/links">LINKS</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="z"></div>
        </div>
      </header>
    );
};

export default Header;
