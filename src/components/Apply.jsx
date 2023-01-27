import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Apply() {
  const ref = useRef(null);

  const HandleScroll = () => {
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="apply-main">
        <div className="grid-apply">
          <div className="item1-apply">
            <div className="apply-title">Platinum digital credit card</div>
          </div>
          <div className="item2-apply">
            <div className="apply-subtitle">
              Our best credit card.Suitable for everyday spending and shopping.
              Cash withdrawals and transfers without commission and interest.
            </div>
          </div>
          <div className="item3-apply">
            <div className="apply-percent">
              <p className="apply-t">Up to 160 days</p>
              <p className="apply-g">No percent</p>
            </div>
          </div>
          <div className="item4-apply">
            <div className="apply-limit">
              <p className="apply-t">Up to 600 000 ₽</p>
              <p className="apply-g">Credit limit</p>
            </div>
          </div>
          <div className="item5-apply">
            <div className="apply-servise">
              <p className="apply-t">0 ₽</p>
              <p className="apply-g">Card service is free</p>
            </div>
          </div>
          <div className="item6-apply">
            <button className="btn-apply" onClick={HandleScroll}>
              Apply for card
            </button>
          </div>
          <div className="item7-apply">
            <img src="./images/card5.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Apply;
