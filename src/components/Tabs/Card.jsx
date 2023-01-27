import React from "react";

function Card() {
  return (
    <>
      <div className="grid-cardup">
        <div className="item1-card">
          <img src="./assets/Money.svg" alt="" />
          <h1>Up to 50 000 ₽</h1>
          <p>Cash and transfers without commission and percent</p>
        </div>
        <div className="item2-card">
          <img src="./assets/Calendar.svg" alt="" />
          <h1>Up to 160 days</h1>
          <p>Without percent on the loan</p>
        </div>
        <div className="item3-card">
          <img src="./assets/Clock.svg" alt="" />
          <h1>Free delivery</h1>
          <p>
            We will deliver your card by courier at a convenient place and time
            for you
          </p>
        </div>
      </div>
      <div className="grid-carddown">
        <div className="item4-card">
          <img src="./assets/Bag.svg" alt="" />
          <h1>Up to 12 months</h1>
          <p>
            No percent. For equipment, clothes and other purchases in
            installments
          </p>
        </div>
        <div className="item5-card">
          <img src="./assets/Credit.svg" alt="" />
          <h1>Convenient deposit and withdrawal</h1>
          <p>
            At any ATM. Top up your credit card for free with cash or transfer
            from other cards
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
