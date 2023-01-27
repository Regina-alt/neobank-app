import React from "react";
import About from "../components/About";
import Apply from "../components/Apply";
import Prescoring from "../components/Prescoring";

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
