import React from "react";
import "./Main.css";

const Main: React.FC<{}> = () => {
  return (
    <main className="mainContainer">
      <div className="mainContent">
        <div className="mainPhoto">
          <div className="description">
            <p className="small"> 2022 Lastest Collection</p>
            <p className="large">
              New Fashion <br /> Collection
            </p>
            <button className="shopButton">SHOP NOW</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
