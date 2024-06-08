import React from "react";

const Cards = ({ imgUrl, title, descriptionCard }) => {
  return (
    <div id="cardContainer">
      <div
        style={{
          background: `url(${imgUrl}) center / cover no-repeat`,
          width: "100%",
          height: "170px",
          marginBottom: "30px",
        }}
      ></div>
      <h3 style={{ fontWeight: "500" }}>{title}</h3>
      <p style={{ lineHeight: "23px", marginTop: "10px", fontWeight: "300" }}>
        {descriptionCard}
      </p>
    </div>
  );
};

export default Cards;
