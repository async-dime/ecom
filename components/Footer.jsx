import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Triniti Realm - All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <a href="https://twitter.com/async_dime" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
