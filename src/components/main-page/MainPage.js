import React from "react";
import styles from "./main.css";
import sunny1 from "./images/sunny1.png";

function MainPage() {
  return (
    <div className="mainBody textStyle">
      {/* today : max/min temp, city, temperature */}
      <div id="today">
        <div className="center">
          {/* TODO : make image random */}
          <div id="cityImage" className="city-rectangle dropShadow">
            <div className="overlay-text">
              <div id="maxMinTemp"> max/min temp </div>
              <div id="currentTemp"> current temp </div>
              <div id="cityName"> city name </div>
            </div>
            <img className="image" src={sunny1} alt="sunny image" />
          </div>
          <div id="hourlyTemp" className="rectangle1 dropShadow">
            <div className="rectangle-line"></div>
          </div>
        </div>

        {/* add hourly info  */}
        <br />

        <div className="center">
          <div id="information" className="info-rectangle dropShadow">
            <div>
              information : humidity, air quality, uv index, precipitation
            </div>
          </div>
        </div>

        <br />
      </div>

      {/* end today */}

      {/* 10 day : max/min temp, weather icon, short summary */}
      <br />
      <div className="center">
        <div id="10day" className="rectangle dropShadow">
          <div>10 day summary</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
