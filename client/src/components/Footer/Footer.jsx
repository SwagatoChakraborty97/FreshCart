import React from "react";
import "./Footer.scss";
// importing react icons
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer" id = "clabout">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
          With our reliable home delivery service, rest assured that your order will reach you promptly and in top condition. Plus, we prioritize your safety and follow strict hygiene protocols to ensure a worry-free shopping experience.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Rajagangapur, Main Road Rajgangpur
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 987XXXXXX</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: xyz@abc.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Milk</span>
          <span className="text">Bread</span>
          <span className="text">Vegetables</span>
          <span className="text">Fruits</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">Created by Swagato Chakraborty</span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

