import React from "react";
import Topbar from "./Topbar/Topbar";
import MainSearch from "./MainSearch/MainSearch";
import Nav from "./Nav/Nav";

const Header: React.FC<Record<string, unknown>> = () => {
  return (
    <div>
      <Topbar />
      <MainSearch />
      <Nav />
    </div>
  );
};

export default Header;
