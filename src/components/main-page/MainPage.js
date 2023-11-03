import React from "react";
import styles from "./main.css";

function MainPage() {
  return (
    <div>
      {/* today : max/min temp, city, temperature */}
      <div id="today">
        <div id="cityImage">
          <div id="maxMinTemp">max/min temp</div>
          <div id="currentTemp">current temp</div>
          <div id="cityName">city name</div>
        </div>
        <br />
        <div id="information">
          <div id="humidity">humidity</div>
          <div id="airQuality">air quality</div>
          <div id="uvIndex">uv index</div>
          <div id="precepitation">precipitation</div>
        </div>

        <br />
        <div id="hourlyTemp">
          <div id="time">time</div>
          <div id="temp">temperature</div>
          <div id="icon">icon</div>
        </div>
      </div>

      {/* 10 day : max/min temp, weather icon, short summary */}
      <div id="10day"></div>

      <div className={styles.rectangle}>hello</div>
    </div>
  );
}

export default MainPage;
