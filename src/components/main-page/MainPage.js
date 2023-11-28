import React from "react";
import styles from "./main.css";


function MainPage() {
  return (
  <div className="mainBody textStyle">
      {/* today : max/min temp, city, temperature */}
    
      <div id="today">
        <div className="center">
          {/* TODO : make image random */}
          <div id="cityImage" className="rectangle dropShadow">
            <img src="images/sunny1.png" alt="sunnyImage" />
            <div id="maxMinTemp"> max/min temp </div>
            <br />
            <div id="currentTemp"> current temp </div>
            <br />
            <div id="cityName"> city name </div>
          </div>
        </div>

        {/* add hourly info  */}

        <br />

        <div className="center">
          <div id="information" className="rectangle dropShadow">
            <div id="humidity">humidity</div>
            <div id="airQuality">air quality</div>
            <div id="uvIndex">uv index</div>
            <div id="precepitation">precipitation</div>
          </div>
        </div>

        <br />

        <div className="center">
          <div id="hourlyTemp" className="rectangle dropShadow">
            <div id="time">time</div>
            <div id="temp">temperature</div>
            <div id="icon">icon</div>
          </div>
        </div>
      </div>

      {/* end today */}

      {/* 10 day : max/min temp, weather icon, short summary */}
      <br />
      <div className="center">
        <div id="10day" className="rectangle dropShadow">
          <div id="date">date</div>
          <div id="10dayMaxMinTemp">max/min temp</div>
          <div id="icon">icon</div>
          <div id="summary">summary</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
