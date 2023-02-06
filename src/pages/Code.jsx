import React, { useState, useRef, useEffect } from "react";
import ReactCodeInput from "react-code-input";

import { Audio } from "react-loader-spinner";

function Code() {
  const ref = useRef(null);
  const pathname = window.location.pathname;
  let id = pathname.split("/");
  id = id[2];

  let [code, setCode] = useState({});
  
  useEffect(() => {
   
    fetch(`http://localhost:8080/admin/application/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => setCode(res.sesCode));
   
  }, []);

  const CORRECT_PIN_CODE = code;
  
  const props = {
    inputStyle: {
      width: "48px",
      borderRadius: "8px",
      fontSize: "20px",
      height: "48px",
      paddingLeft: "7px",
      backgroundColor: "transparent",
      color: " #000000",
      border: "1px solid #3182CE",
      margin: "16px",
    },
    inputStyleInvalid: {
      width: "48px",
      borderRadius: "8px",
      fontSize: "20px",
      height: "48px",
      paddingLeft: "7px",
      backgroundColor: "transparent",
      color: " #000000",
      border: "1px solid #3182CE",
      margin: "16px",
    },
  };
  let [loading, setLoading] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const handlePinChange = (pinCode) => {
    setPinCode(pinCode);
    setBtnIsPressed(false);
    const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

    setBtnIsPressed(true);
    setIsPinCodeValid(isPinCodeValid);
    if (!isPinCodeValid) {
      setPinCode(" ");
      ref.current.innerHTML = "Invalid confirmation code";
    }
    if (isPinCodeValid) {
      fetch(`http://localhost:8080/document/${id}/sign/code`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "application/json",
        },
        body: pinCode,
      })
        .then((response) => response.json())
        .then((res) => console.log(res));

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setFormStep((cur) => cur + 1);
    }
  };

  return (
    <>
      {loading ? (
        <Audio color="#003CFF" />
      ) : (
        <>
          {formStep === 0 && (
            <div className="code">
              <h1>Please enter confirmation code</h1>
              <ReactCodeInput
                id="pinCode"
                type="number"
                isValid={isPinCodeValid}
                fields={4}
                onChange={handlePinChange}
                value={pinCode}
                {...props}
              />
              <br />
              <span ref={ref}></span>
            </div>
          )}
          {formStep === 1 && (
            <>
              <div className="congrat">
                <img src="/images/SurpriseImage.png" />
                <h1>
                  Congratulations! You have completed your new credit card.
                </h1>
                <p>
                  Your credit card will arrive soon. Thank you for choosing us!
                </p>
                <a href="/">View other offers of our bank</a>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Code;
