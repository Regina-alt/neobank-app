import React from "react";
import About from "../components/About/About";
import Apply from "../components/Apply/Apply";
import Prescoring from "../components/Prescoring/Prescoring";

function Loan() {
  return (
    <>
      <section className="apply">
        <Apply />
      </section>
      <section className="about">
        <About />
      </section>
      <section className="prescoring">
        <Prescoring />
      </section>
    </>
  );
}

export default Loan;
