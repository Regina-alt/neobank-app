import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <>
      <nav className="topnav" id="myTopnav">
        <Link className="active" Link to="/">
          NeoBank
        </Link>
        
        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/loan">Credit card</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/bank" className="btn-bank-menu">
                Online Bank
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn-bank">
          Online Bank
        </Link>
        <Link className="icon" onClick={myFunction}>
          <img src="/images/menu.png" alt="" width="30px" height="30px" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
