import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="http://jaseem8.github.io/" target="_blank">
            Jaseem Sabith
          </a>{" "}
          2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
