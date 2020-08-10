import React from "react";

import "../css/Footer.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <div className="address">
          <h5>Contact us.</h5>
          <h6>
            Sri Gowri #36
            <br />
            1st Main.7th Cross
            <br />
            Soudamini Layout,Konankunte
            <br />
            Bengaluru-560063.
            <br />
            <br />
            +91 9606416169 &nbsp;
            <WhatsAppIcon />
            <br />
          </h6>
        </div>
        <div className="links">
          <h6>Follow us on</h6>

          <h6> info@cultural.coffee</h6>

          <h6>shreyasculturalcoffee@gmail.com culturalcoffeesales@gmail.com</h6>
          <br />
          <a
            href="https://instagram.com/cultural_coffee?igshid=5isqr1xa3k6k"
            className="link"
          >
            <InstagramIcon style={{ fontSize: "40px" }} />
          </a>
          <a href="https://m.facebook.com/Marksmencoffee/" className="link">
            <FacebookIcon style={{ fontSize: "40px" }} />
          </a>
        </div>
      </div>

      <h6 className="copyright">© 2018 Cultural Coffee,All Rights Reserved</h6>
    </div>
  );
}

export default Footer;
