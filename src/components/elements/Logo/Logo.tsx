import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

interface Params {
  size: string;
}

function Logo({ size }: Params) {
  return (
    <div className="logoContainer">
      <Link to="/" className="logo" style={{ fontSize: size }}>
        LOGO
      </Link>
    </div>
  );
}

export default Logo;
