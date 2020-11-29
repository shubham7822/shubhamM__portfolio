import React from "react";
import "./footer.css";
import { FaHeart } from "react-icons/fa";
import LightSpeed from "react-reveal/LightSpeed";

function footer() {
  return (
    <div id='footer'>
      <LightSpeed left>
        <h1 className='footer-headline'>
          Made with <FaHeart className='footer-love' /> By Shubham
        </h1>
      </LightSpeed>
    </div>
  );
}

export default footer;
