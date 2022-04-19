import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="logoContainer">
      <Link to="/" className="logo" style={{ fontSize: "40px" }}>
        LOGO
      </Link>
    </div>
  );
};

export default Logo;
