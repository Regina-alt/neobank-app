import "./About.css"
import React from "react";
import { useState } from "react";
import Card from "../Tabs/Card";

import { Link } from "react-router-dom";
import Rates from "../Tabs/Rates";
import Cashback from "../Tabs/Cashback";
import FAQ from "../Tabs/FAQ";
import FAQ2 from "../Tabs/FAQ2";

function About() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="bloc-tabs">
        <Link
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About card
        </Link>
        <Link
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Rates and conditions
        </Link>
        <Link
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Cashback
        </Link>
        <Link
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          FAQ
        </Link>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Card />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Rates />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Cashback />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <FAQ />
          <FAQ2 />
        </div>
      </div>
    </>
  );
}

export default About;
