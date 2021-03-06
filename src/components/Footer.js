import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../public/images/facebook_icon.svg";
import img2 from "../../public/images/twitter_icon.svg";
import img3 from "../../public/images/instagram_icon.svg";

const Footer = () => (
  <div className="footer-container">
    <ul>
      <li>Follow us on: </li>
      <li>
        <a href="http://www.facebook.com">
          <p>Facebook</p>
          <span>
            <img
              src={img}
              alt="facebook"
              style={{ height: "3rem", width: "3rem" }}
            ></img>
          </span>
        </a>
      </li>
      <li>
        <a href="http://www.twitter.com">
          <p>Twitter</p>
          <span>
            <img
              src={img2}
              alt="twitter"
              style={{ height: "3rem", width: "3rem" }}
            ></img>
          </span>
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com">
          <p>Instagram</p>
          <span>
            <img
              src={img3}
              alt="Instagram"
              style={{ height: "5rem", width: "5rem" }}
            ></img>
          </span>
        </a>
      </li>
      <li>
        <NavLink className="footer-links" to="/contact">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink className="footer-links" to="/sponsors">
          Sponsors
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Footer;
