import React from "react";

import "./preloader.css";
import { preLoaderAnim } from "../animations";


const PreLoader = ({onclick}) => {

  React.useEffect(() => {
    preLoaderAnim();
  }, [onclick]);

  return (
    <div onClick={onclick} className="preloader">
      <div className="texts-container">
        <span>Yuuta </span>
        <span>Kinoshi</span>
      </div>
    </div>
  );
};

export default PreLoader;
