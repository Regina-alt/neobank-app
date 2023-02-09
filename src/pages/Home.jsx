import React from "react";
import Currency from "../components/Currency/Currency";
import Features from "../components/Features/Features";
import Title from "../components/Title/Title";
import Map from "../components/Map/Map";
import News from "../components/News/News";
import Support from "../components/Support/Support";

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
