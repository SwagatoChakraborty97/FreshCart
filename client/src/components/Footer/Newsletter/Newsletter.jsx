import React from "react";
// Syntax to import multiple icons from
// ... https://react-icons.github.io/react-icons
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
// to import styling
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest Offers</span>
        <div className="form">
          <input type="text" name="" id="" placeholder="Enter Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">Will be used in accordance to Privacy Policy</div>
        <div className="social-icons">
          <div className="icon">
            <CiFacebook size={54}></CiFacebook>
          </div>
          <div className="icon">
            <CiTwitter size={54}></CiTwitter>
          </div>
          <div className="icon">
            <CiInstagram size={54}></CiInstagram>
          </div>
          <div className="icon">
            <CiLinkedin size={54}></CiLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
