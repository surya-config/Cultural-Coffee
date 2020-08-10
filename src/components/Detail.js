import React from "react";
import data from "../data";
import NavAll from "./NavAll";
import Footer from "./Footer";

import "../css/Detail.css";

function Detail(props) {
  const pid = props.match.params.id;
  console.log(pid);
  const product = data.find((item) => item.id === pid);

  return (
    <div className="detailed__product">
      <NavAll />
      <table>
        <tr>
          <td>
            <img
              className="product__image"
              src={product.source}
              alt={product.title}
            />
          </td>
          <td>
            <h1
              style={{
                marginLeft: "100px",
                marginBottom: "40px",
                letterSpacing: "5px",
                padding: "15px",
                textShadow: "2px 2px 2px #CCCCCC",
                fontSize: "42px",
                fontWeight: "900",
              }}
            >
              {product.title}
            </h1>

            <div className="product__detail">
              <h5>
                {product.description.map((item) => (
                  <div className="content">
                    <h2 className="head">{item.heading}</h2>
                    <h6
                      style={{
                        marginBottom: "20px",
                        marginTop: "20px",
                        letterSpacing: "1.5px",
                      }}
                    >
                      {item.para}
                    </h6>
                  </div>
                ))}
              </h5>
            </div>
          </td>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default Detail;
