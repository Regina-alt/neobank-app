import "./Modal.css"
import React, { useRef } from "react";

function Modal({ setOpenModal }) {
  const pathname = window.location.pathname;
  let id = pathname.split("/");
  id = id[2];
  const ref = useRef(null);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div className="title">
            <h1>Deny application</h1>
          </div>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="body">
          <p ref={ref}>
            You exactly sure, you want to cancel this application?
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              ref.current.innerHTML = "Your application has been deny!";
              let btn = document.querySelector("#cancelBtn");
              btn.style.display = "none";
              document.querySelector("#ContinueBtn").innerHTML =
                '<a href="/">Go home</a>';

                fetch(`http://localhost:8080/application/${id}/deny`, {
                  method: "POST",
                  headers: {
                    accept: "*/*",
                  },
                  body: "",
                })
                  .then((response) => response.json())
                  .then((res) => console.log(res));
            }}
            id="cancelBtn"
          >
            Deny
          </button>
          <button
            id="ContinueBtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
