import React, { useState } from "react";
import CreditCardOffer from "../file/CreditCardOffer.pdf";

import { Audio } from "react-loader-spinner";

function Sign() {
  const pathname = window.location.pathname;
  let id = pathname.split("/");
  id = id[2];

  let [loading, setLoading] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [boxes, setBoxes] = useState([]);

  function handleChange(e) {
    const {
      parentNode: { children },
    } = e.target;
    const index = [...children].indexOf(e.target);
    const newState = [...boxes];
    newState[index] = !newState[index];
    setBoxes(newState);
  }

  function isDisabled() {
    const len = boxes.filter((box) => box).length;
    return len === 0 || len > 1;
  }
  return (
    <>
      {loading ? (
        <Audio color="#003CFF" />
      ) : (
        <>
          {formStep === 0 && (
            <>
            <div className="sign">
            <div className="sign-header">
                <h1>Signing of documents</h1>
                <p>Step 4 of 5</p>
              </div>
              <div className="sign-body">
                <p>
                  Information on interest rates under bank deposit agreements
                  with individuals. Center for Corporate Information Disclosure.
                  Information of a professional participant in the securities
                  market. Information about persons under whose control or
                  significant influence the Partner Banks are. By leaving an
                  application, you agree to the processing of personal data,
                  obtaining information, obtaining access to a credit history,
                  using an analogue of a handwritten signature, an offer, a
                  policy regarding the processing of personal data, a form of
                  consent to the processing of personal data.
                </p>
                <div className="link_sign_block">
                <a href={CreditCardOffer} target="_blank">
                  <img src="/assets/File_dock_duotone.svg" />
                </a>
                <a href={CreditCardOffer} target="_blank" className="link_sign">
                  {" "}
                  Information on your card
                </a>
                </div>
                <div className="sign-footer">
                  <div className="agree_check">
                    <input type="checkbox" onChange={handleChange} />
                  </div>
                  <div className="text_agree">
                    <h5>I agree</h5>
                  </div>

                  <div className="sign_btn">
                    <button
                      className="sign-btn"
                      id="send-btn"
                      disabled={isDisabled()}
                      onClick={() => {
                        fetch(`http://localhost:8080/document/${id}/sign`, {
                          method: "POST",
                          headers: {
                            accept: "*/*",
                          },
                          body: "",
                        })
                          .then((response) => response.json())
                          .then((res) => console.log(res));

                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                        }, 5000);
                        setFormStep((cur) => cur + 1);
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </>
          )}
          {formStep === 1 && (
            <>
            <div className="result_sign">
            <h1>
                Documents have been successfully signed and sent for approval
              </h1>
              <p>
                Within 10 minutes you will be sent a PIN code to your email for
                confirmation
              </p>
            </div>
              
            </>
          )}
        </>
      )}
    </>
  );
}

export default Sign;
