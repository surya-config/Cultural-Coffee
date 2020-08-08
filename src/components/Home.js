import React from "react";

import "../css/Home.css";
import Cards from "./Cards";

import data from "../data";
import NavTop from "./NavTop";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavTop />
      <Header />
      <div className="content" height="1000px"></div>
      <h2
        style={{ marginLeft: "42%", marginBottom: "0px", letterSpacing: "3px" }}
      >
        Our Products
      </h2>
      <div className="products">
        {data.map((item) => (
          <Cards
            id={item.id}
            title={item.title}
            desc={item.desc}
            source={item.source}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
