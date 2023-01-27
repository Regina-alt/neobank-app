import React from "react";
import { Link } from "react-router-dom";

function Currency() {
  let timeUpdate = new Date();
  timeUpdate = timeUpdate.toLocaleDateString("ru-RU");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ecac27ca64msh2f3d28483e0cd4ap1ce16djsn09f5769889e9",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  const CURRENCY_CODE = {
    USD: "USD",
    EUR: "EUR",
    SGD: "SGD",
    CAD: "CAD",
    GBP: "GBP",
    NZD: "NZD",
  };

  React.useEffect(() => {
    for (let key in CURRENCY_CODE) {
      fetch(
        `https://currency-exchange.p.rapidapi.com/exchange?from=${key}&to=RUB&q=1.0`,
        options
      )
        .then((res) => {
          return res.json();
        })
        .then((arr) => {
          document.querySelector("#data").innerHTML += `
                <p class="gray">${key}:</p>
                <p class="money">${arr.toFixed(2)}</p>
                `;
        });
    }
  }, []);

  setInterval(function () {
    let container = document.getElementById("data");
    let content = container.innerHTML;
    container.innerHTML = content;

    console.log("Refreshed");
  }, 900000);

  return (
    <>
      <div className="currency-main">
        <div className="grid-currency">
          <div className="item1-currency">
            <div className="currency-title">Exchange rate in internet bank</div>
          </div>
          <div className="item2-currency">
            <div className="update">
              Update every 15 minutes, MSC{" "}
              <span id="timeUpdate">{timeUpdate}</span>
            </div>
          </div>
          <div className="item3-currency">
            <div className="main-currency">
              <p className="subtitle-currency">Currency</p>
              <div className="currency-data" id="data"></div>
              <div className="all_courses">
                <Link href="#" className="course">
                  All courses
                </Link>
              </div>
            </div>
          </div>
          <div className="item4-currency">
            <div className="dom">
              <img src="./assets/dom.svg" width="50%" height="50%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Currency;
