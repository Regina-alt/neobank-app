import React from "react";
import FormPrescoring from "./Form/FormPrescoring";

function Prescoring() {
  return (
    <>
      <h1 className="title-pres">How to get a card</h1>
      <div className="grid-steps">
        <div className="item1-steps">
          <img src="./images/one.png" alt="" />
          <p>
            Fill out an online application - you do not need to visit the bank
          </p>
        </div>
        <div className="item2-steps">
          <img src="./images/two.png" alt="" />
          <p>
            Find out the bank's decision immediately after filling out the
            application
          </p>
        </div>
        <div className="item3-steps">
          <img src="./images/three.png" alt="" />
          <p>
            The bank will deliver the card free of charge, wherever convenient,
            to your city
          </p>
        </div>
      </div>
      <FormPrescoring />
    </>
  );
}

export default Prescoring;
