import Search from "../../elements/Search/Search";
import Logo from "../../elements/Logo/Logo";
import React from "react";
import "./MainSearch.css";

const MainSearch: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="searchContainer">
      <div className="searchContent">
        <Logo />
        <Search />
      </div>
    </div>
  );
};

export default MainSearch;
