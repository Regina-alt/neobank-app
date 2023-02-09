import "./Title.css";

import React from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <>
      <div className="grid-container">
        <div className="item1">
          <p>Choose the design you like and apply for card right now</p>
          <Link to="/" className="btn-title">
            Choose the card
          </Link>
        </div>
        <div className="item2">
          <img src="./images/card1.jpg" alt="" />
        </div>
        <div className="item3">
          <img src="./images/card2.jpg" alt="" />
        </div>
        <div className="item4">
          <img src="./images/card3.jpg" alt="" />
        </div>
        <div className="item5">
          <img src="./images/card4.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Title;
