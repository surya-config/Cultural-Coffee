import React from "react";

import "../css/Header.css";
import NavTop from "./NavTop";

function Header() {
  return (
    <div className="header">
      <div className="slogan"></div>
      <div className="cap">
        <h5
          style={{
            color: "#a5700c",
            letterSpacing: "4px",
            fontFamily: "Muli",
          }}
        >
          A curetted selection of coffee carefully hand made for your every cup.
        </h5>
      </div>
    </div>
  );
}

export default Header;
