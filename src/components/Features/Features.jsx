import "./Features.css";
import React from "react";

function Features() {
  return (
    <>
      <div className="grid-features">
        <div className="item1-features">
          <img src="./assets/features.svg" width="100%" height="80%" />
        </div>
        <div className="item2-features">
          <p className="features-title">We Provide Many Features You Can Use</p>
          <p className="features-subtitle">
            You can explore the features that we provide with fun and have their
            own functions each feature
          </p>
          <ul>
            <li>Powerfull online protection.</li>
            <li>Cashback without borders.</li>
            <li>Personal design</li>
            <li>Work anywhere in the world</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Features;
