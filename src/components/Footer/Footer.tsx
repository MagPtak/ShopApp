import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="aboutContainer">
          <p className="about">ABOUT COMPANY</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="columnsContainer">
          <div className="column">
            <p className="title">ABOUT</p>
            <Link to="other">about us</Link>
            <Link to="other">terms and conditions</Link>
            <Link to="other">provacy policy</Link>
            <Link to="other">FAQ</Link>
            <Link to="other">contact us</Link>
          </div>
          <div className="column">
            <p className="title">SESSION</p>
            <Link to="/signin">sign in</Link>
            <Link to="/signup">register</Link>
            <Link to="other">forget password</Link>
            <Link to="other">thank you</Link>
          </div>
          <div className="column">
            <p className="title">CATEGORIES</p>
            <Link to="/category/:women">women</Link>
            <Link to="/category/:men">men</Link>
            <Link to="/category/:accessories">accessories</Link>
            <Link to="/category/:gadgets">gadgets</Link>
          </div>
          <div className="column">
            <p className="title">SOCIAL</p>
            <a href="https://www.facebook.com/">facebook</a>
            <a href="https://twitter.com/?lang=en">twitter</a>
            <a href="https://www.youtube.com/">youtube</a>
            <a href="https://www.google.com/">google plus</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
