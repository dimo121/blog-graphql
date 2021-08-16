import React from "react";
import img from "../../public/images/packt.jpg";
import img2 from "../../public/images/udemy.png";
import img3 from "../../public/images/seven.jpg";

const Sponsors = () => (
  <div className="page-container">
    <div className="sponsor-container">
      <ul>
        <li>
          <h1>Meet our sponsors</h1>
        </li>
        <span>
          <img
            src={img}
            alt="packt-publishing"
            style={{ height: "30rem", width: "80rem", marginTop: "20px" }}
          ></img>
        </span>
        <li>
          <h1>Udemy.com</h1>
        </li>
        <span>
          <img
            src={img2}
            alt="udemy.com"
            style={{ height: "30rem", width: "80rem", marginTop: "20px" }}
          ></img>
        </span>
        <li>
          <h1>Channel 7</h1>
        </li>
        <span>
          <img
            src={img3}
            alt="channel-7"
            style={{ height: "30rem", width: "80rem", marginTop: "20px" }}
          ></img>
        </span>
      </ul>
    </div>
  </div>
);

export default Sponsors;
