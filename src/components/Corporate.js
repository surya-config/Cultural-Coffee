import React from "react";
import NavAll from "./NavAll";
import Footer from "./Footer";

import "../css/Corporate.css";
import corporateData from "../corporateData";

function Corporate() {
  return (
    <div>
      <NavAll />
      <div className="about">
        {corporateData.map((item) => (
          <div>
            <h2 className="heading">{item.heading}</h2>
            <h3 className="subheading">{item.subhead}</h3>
            <p className="para">{item.para}</p>
            <hr class="line"></hr>
            <br />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Corporate;
