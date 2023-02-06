import React from "react";

function NotFound() {
  return (
    <>
      <div className="notfound-grid">
        <div className="item1-notfo">
          <h1>Oops....</h1>
          <h1>Page not found</h1>
          <p>This Page doesn`t exist or was removed! We suggest you go back.</p>
          <a href="/">Go back</a>
        </div>
        <div className="item2-notfo">
          <img src="./images/404.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default NotFound;
