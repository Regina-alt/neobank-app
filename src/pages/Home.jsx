import React from "react";
import Currency from "../components/Currency";
import Features from "../components/Features";
import Title from "../components/Title";
import Map from "../components/Map";
import News from "../components/News";
import Support from "../components/Support";

function Home() {
  return (
    <>
      <section className="title">
        <Title />
      </section>
      <section className="features">
        <Features />
      </section>
      <section className="currency">
        <Currency />
      </section>
      <section className="map">
        <Map />
      </section>
      <section className="news">
        <News />
      </section>
      <section className="support">
        <Support />
      </section>
    </>
  );
}

export default Home;
