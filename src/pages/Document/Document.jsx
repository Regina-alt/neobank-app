import React, { useState } from "react";
import Table from "../../components/Table/Table";
import { Audio } from "react-loader-spinner";
import Modal from "../../components/Modal/Modal";

function Document() {
  const pathname = window.location.pathname;
  let id = pathname.split("/");
  id = id[2];

  let [loading, setLoading] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [boxes, setBoxes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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
    <div className="formDocument">
      <>
        {loading ? (
          <Audio color="#003CFF" />
        ) : (
          <>
            {formStep === 0 && (
              <>
                <div className="payment">
                  <div className="payment-header">
                    <h1>Payment Schedule</h1>
                    <p>Step 3 of 5</p>
                  </div>
                  <div className="payment-table">
                    <Table />
                  </div>
                  <div className="payment-footer">
                    <div className="deny">
                      <button
                        className="deny-btn"
                        onClick={() => {
                          setModalOpen(true);
                        }}
                      >
                        Deny
                      </button>
                    </div>
                    <div className="send">
                      <div className="agree_check">
                        <input type="checkbox" onChange={handleChange} />
                      </div>
                      <div>
                        <h5>I agree with the payment schedule</h5>
                      </div>

                      <div className="snd">
                        <button
                          className="send-btn"
                          id="send-btn"
                          disabled={isDisabled()}
                          onClick={() => {
                            fetch(`http://localhost:8080/document/${id}`, {
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
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
              </>
            )}
            {formStep === 1 && (
              <>
                <div className="message">
                  <h1>Documents are formed</h1>
                  <p>Documents for signing will be sent to your email</p>
                </div>
              </>
            )}
          </>
        )}
      </>
    </div>
  );
}

export default Document;
