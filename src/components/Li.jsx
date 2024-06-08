import React from "react";
import "./Li.css";
import { FaEllipsis } from "react-icons/fa6";

const Li = ({ icon, text, url, target }) => {

  return (
    <a href={url} target={target} rel="noopener noreferrer">
      <li id="linksLi">
        {icon}
        {text}
        <FaEllipsis />
      </li>
    </a>
  );
};

export default Li;
