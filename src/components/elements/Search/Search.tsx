import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Search.css";

const Search: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="inputContainer">
      <div className="box">
        <input className="input" type="text" placeholder="Search" required />
        <button className="button">
          <SearchIcon sx={{ color: "rgb(0,0,0)" }} />
        </button>
      </div>
    </div>
  );
};

export default Search;
