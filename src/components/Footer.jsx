import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <img src="./assets/logo.svg" />
      <p className="phone">+7 (495) 984 25 13</p>
      <p className="info">info@neoflex.ru</p>

      <div className="links-footer">
        <ul>
          <li>
            <Link to="/">About bank</Link>
          </li>
          <li>
            <Link to="/">Ask a Question</Link>
          </li>
          <li>
            <Link to="/">Quality of service</Link>
          </li>
          <li>
            <Link to="/">Requisites</Link>
          </li>
          <li>
            <Link to="/">Press center</Link>
          </li>
          <li>
            <Link to="/">Bank career</Link>
          </li>
          <li>
            <Link to="/">Investors</Link>
          </li>
          <li>
            <Link to="/">Analytics</Link>
          </li>
          <li>
            <Link to="/">Business and processes</Link>
          </li>
          <li>
            <Link to="/">Compliance and business ethics</Link>
          </li>
        </ul>
      </div>

      <div className="line"></div>

      <div className="text">
        <p>
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </p>
      </div>
    </>
  );
}

export default Footer;
