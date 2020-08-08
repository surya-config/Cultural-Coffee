import React from "react";
import data from "../data";
import NavAll from "./NavAll";

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
            <div className="product__detail">
              <h5>
                {product.description.map((item) => (
                  <div>
                    <h2>{item.heading}</h2>
                    <h6>{item.para}</h6>
                  </div>
                ))}
              </h5>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h1
              style={{
                marginLeft: "100px",
                letterSpacing: "3px",
              }}
            >
              {product.title}
            </h1>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Detail;
