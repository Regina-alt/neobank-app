import React, { useState } from "react";
import Result from "./Result";
import { Audio } from "react-loader-spinner";

function Offer(props) {
  const [formStep, setFormStep] = useState(1);
  let [loading, setLoading] = useState(false);
  return (
    <div className="formOffer">
      {loading ? (
        <Audio color="#003CFF" />
      ) : (
        <>
          {formStep === 1 && (
            <div className="offer-grid">
              {props.offers.map((item) => (
                <>
                  <div className="item1-offer">
                    <img
                      className="surpise-img"
                      src="./images/SurpriseImage.png"
                      alt=""
                    />
                    <p>Requested amount: {item.requestedAmount} ₽</p>
                    <p>
                      Total amount:
                      {item.totalAmount} ₽
                    </p>
                    <p>For {item.term} months</p>
                    <p>Monthly payment: {item.monthlyPayment} ₽</p>
                    <p>
                      Rate:
                      {item.rate} %
                    </p>
                    <p>
                      Insurance included{" "}
                      {item.isInsuranceEnabled == true && (
                        <img src="./assets/check.svg" alt="" />
                      )}
                      {item.isInsuranceEnabled == false && (
                        <img src="./assets/error.svg" alt="" />
                      )}
                    </p>
                    <p>
                      Salary client{" "}
                      {item.isSalaryClient == true && (
                        <img src="./assets/check.svg" alt="" />
                      )}
                      {item.isSalaryClient == false && (
                        <img src="./assets/error.svg" alt="" />
                      )}
                    </p>
                    <button
                      className="btn-offer"
                      key={item.rate}
                      onClick={() => {
                        fetch("http://localhost:8080/application/apply", {
                          method: "POST",
                          headers: {
                            accept: "*/*",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            applicationId: item.applicationId,
                            requestedAmount: item.requestedAmount,
                            totalAmount: item.totalAmount,
                            term: item.term,
                            monthlyPayment: item.monthlyPayment,
                            rate: item.rate,
                            isInsuranceEnabled: item.isInsuranceEnabled,
                            isSalaryClient: item.isSalaryClient,
                          }),
                        })
                          .then((response) => response.json())
                          .then((res) => console.log(res));

                        console.log(JSON.stringify(item));
                        localStorage.setItem(
                          "applicationId",
                          item.applicationId
                        );

                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                        }, 5000);
                        setFormStep((cur) => cur + 1);
                      }}
                    >
                      Select
                    </button>
                  </div>
                </>
              ))}
            </div>
          )}
          {formStep === 2 && <Result />}
        </>
      )}
    </div>
  );
}

export default Offer;
