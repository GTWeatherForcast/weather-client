/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import styles2 from "./cityimg.module.css";
import NavBar from "./navbar.js";
import HorizontalLine from "./HorizontalLine.js";
import RangeSlider_ReadOnly from "./RangeSlider.js";
import cloud from "./images/cloud.png";
import sun from "./images/sun.png";
import rain from "./images/rain.png";
import snow from "./images/snow.png";
import { weatherUrl, weatherKey } from "../../api.js"; 

// todo: make the values in detailData linked with a prop/state so we can update them on the fly and also link the subtitle/sliders automatically
function MainPage() {
  const [textColor, setTextColor] = useState(styles.originalColor);
  const [wData, setWData] = useState(null);

  const dateOnClick = () => {
    // change color
    setTextColor(styles.clickedColor);
    // update right side info
  };

  const handleGChildData = (data) => {
    setWData(data);
  }
  
  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const currentWeather = fetch(`${weatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`);
            const forecastWeather = fetch(`${weatherUrl}/forecast/?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`);

            Promise.all([currentWeather, forecastWeather])
                .then(responses => Promise.all(responses.map(res => res.json())))
                .then(([currentWeatherData, forecastWeatherData]) => {
                    setWData([currentWeatherData, forecastWeatherData]);
                    console.log([currentWeatherData, forecastWeatherData])
                })
                .catch(error => console.error("Error fetching weather data:", error));
        });
    }
  }, []);

  return (
    <div className={`${styles.mainBody}`}>
      <div className={styles.mainNavDiv}>
        <NavBar sendDataToGParent={handleGChildData}/>
      </div>

      {wData && <div className={styles.contentBody}>
        <div className={styles.today}>
          <div className={styles.leftCard}>
            {/* Change styles2.weatherSunny to other weather conditions */}
            <>
            {wData[0].weather[0].main === "Clear" &&
            <div
              className={`${styles.mainInfo} ${styles.card} ${styles2.weatherSunny}`}
            >
              <div className={`${styles2.cityImg}`}></div>
              <div className={`${styles.overlayText}`}>
                <div id={`${styles.todayHighLow}`}>H: {Math.round((9/5)*(wData[0].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[0].main.temp_min - 273)+32)}°F</div>
                <div id={`${styles.currentTemp}`}>{Math.round((9/5)*(wData[0].main.temp - 273)+32)}°F</div>
                <div id={`${styles.currentLocation}`}>{wData[0].name}, {wData[0].sys.country}</div>
              </div>
            </div>
            }
            </>

            <>
            {(wData[0].weather[0].main === "Clouds") &&
            <div
              className={`${styles.mainInfo} ${styles.card} ${styles2.weatherCloudy}`}
            >
              <div className={`${styles2.cityImg}`}></div>
              <div className={`${styles.overlayText}`}>
                <div id={`${styles.todayHighLow}`}>H: {Math.round((9/5)*(wData[0].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[0].main.temp_min - 273)+32)}°F</div>
                <div id={`${styles.currentTemp}`}>{Math.round((9/5)*(wData[0].main.temp - 273)+32)}°F</div>
                <div id={`${styles.currentLocation}`}>{wData[0].name}, {wData[0].sys.country}</div>
              </div>
            </div>
            }
            </>

            <>
            {(wData[0].weather[0].main == "Rain" || wData[0].weather[0].main == "Thunderstorm" || wData[0].weather[0].main == "Drizzle") &&
            <div
              className={`${styles.mainInfo} ${styles.card} ${styles2.weatherRain}`}
            >
              <div className={`${styles2.cityImg}`}></div>
              <div className={`${styles.overlayText}`}>
                <div id={`${styles.todayHighLow}`}>H: {Math.round((9/5)*(wData[0].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[0].main.temp_min - 273)+32)}°F</div>
                <div id={`${styles.currentTemp}`}>{Math.round((9/5)*(wData[0].main.temp - 273)+32)}°F</div>
                <div id={`${styles.currentLocation}`}>{wData[0].name}, {wData[0].sys.country}</div>
              </div>
            </div>
            }
            </>

            <>
            {(wData[0].weather[0].main === "Snow") &&
            <div
              className={`${styles.mainInfo} ${styles.card} ${styles2.weatherSnow}`}
            >
              <div className={`${styles2.cityImg}`}></div>
              <div className={`${styles.overlayText}`}>
                <div id={`${styles.todayHighLow}`}>H: {Math.round((9/5)*(wData[0].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[0].main.temp_min - 273)+32)}°F</div>
                <div id={`${styles.currentTemp}`}>{Math.round((9/5)*(wData[0].main.temp - 273)+32)}°F</div>
                <div id={`${styles.currentLocation}`}>{wData[0].name}, {wData[0].sys.country}</div>
              </div>
            </div>
            }
            </>

            <div className={`${styles.detailedInfo} ${styles.card}`}>
              <div id={styles.detailHumid} className={`${styles.detailCard}`}>
                <h1>HUMIDITY</h1>
                <p className={styles.detailData}>{wData[0].main.humidity}%</p>
                <p
                  className={`${styles.detailSubtitle} ${styles.uvDetailSubtitle}`}
                >
                  Dew point: {Math.round((9/5)*(wData[0].main.temp - 273)+32) - ((100-wData[0].main.humidity)/5)}°
                </p>
              </div>

              <div id={styles.detailAQ} className={`${styles.detailCard}`}>
                <h1>FEELS LIKE</h1>
                <p className={styles.detailData}>{Math.round((9/5)*(wData[0].main.feels_like - 273)+32)}°F</p>
                <div>
                  <p className={styles.detailSubtitle}>Wind is making it feel cooler.</p>
                  {/* <RangeSlider_ReadOnly
                    initialVal={40}
                    minVal={0}
                    maxVal={301}
                    step={1}
                  /> */}
                </div>
              </div>

              <div id={styles.detailUV} className={`${styles.detailCard}`}>
                <h1>VISIBILITY</h1>
                <p className={styles.detailData}>{(wData[0].visibility*3.28/5280).toFixed(2)} mi</p>
                <div>
                  <p className={styles.detailSubtitle}>Good view.</p>
                  {/* <RangeSlider_ReadOnly
                    initialVal={5}
                    minVal={1}
                    maxVal={11}
                    step={1}
                  /> */}
                </div>
              </div>

              <div id={styles.detailPrecip} className={`${styles.detailCard}`}>
                <h1>WIND</h1>
                <p className={styles.detailData}>{(wData[0].wind.speed * 2.24).toFixed(2)} mph</p>
                <p className={styles.detailSubtitle}>{(wData[0].wind.deg)} degrees</p>
              </div>
            </div>
          </div>

          {/* <div className={`${styles.hourlyForecast} ${styles.card}`}>
            <div id={styles.hourlyLineContainer}>
              <div className={styles.hourlyMargin}>00:00</div>
              <HorizontalLine />
              <div className={styles.hourlyMargin}>00:00</div>
              <HorizontalLine />
              <div className={styles.hourlyMargin}>00:00</div>
              <HorizontalLine />
              <div className={styles.hourlyMargin}>00:00</div>
              <HorizontalLine />
              <div className={styles.hourlyMargin}>00:00</div>
              <HorizontalLine />
              <div className={styles.hourlyMargin}>00:00</div>
              <HorizontalLine />
              <div className={styles.hourlyMargin}>00:00</div>
            </div>
          </div> */}
        </div>

        <div
          className={`${styles.tenDayForecast} ${styles.card} ${styles.textStyle}`}
        >
          <div className={styles.title}>5 DAY FORECAST</div>
          {/* <div className={styles.cdIconContainer}>
            <img className={styles.currentDateIcon} src={cloud} alt="cloud" />
          </div> */}
          <div className={styles.lineContainer}>
            <div className={styles.tContainer} onClick={dateOnClick}>
              <div className={styles.margin} style={{ color: textColor }}>
                {wData[1].list[4].dt_txt.substring(5, 7)}/{wData[1].list[4].dt_txt.substring(8, 10)}
              </div>
              <div className={styles.sum} style={{ color: textColor }}>
              H: {Math.round((9/5)*(wData[1].list[0].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[1].list[4].main.temp_min - 273)+32)}°F
              </div>
              <div>
                {wData[1].list[4].weather[0].main === 'Clear' && <img className={styles.icon} src={sun} alt="sun" />}
                {(wData[1].list[4].weather[0].main === "Clouds") && <img className={styles.icon} src={cloud} alt="cloud" />}
                {(wData[1].list[4].weather[0].main === 'Rain' || wData[1].list[4].weather[0].main === 'Thunderstorm' || wData[1].list[4].weather[0].main === 'Drizzle') && <img className={styles.icon} src={rain} alt="rain" />}
                {(wData[1].list[4].weather[0].main === "Snow") && <img className={styles.icon} src={snow} alt="snow" />}
              </div>
              <div className={styles.sum2} style={{ color: textColor }}>
                {wData[1].list[4].weather[0].description}
              </div>
            </div>
            <HorizontalLine />

            <div className={styles.tContainer} onClick={dateOnClick}>
              <div className={styles.margin}>{wData[1].list[12].dt_txt.substring(5, 7)}/{wData[1].list[12].dt_txt.substring(8, 10)}</div>
              <div className={styles.sum}> H: {Math.round((9/5)*(wData[1].list[8].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[1].list[12].main.temp_min - 273)+32)}°F</div>
              <div>
                {wData[1].list[12].weather[0].main === 'Clear' && <img className={styles.icon} src={sun} alt="sun" />}
                {(wData[1].list[12].weather[0].main === "Clouds") && <img className={styles.icon} src={cloud} alt="cloud" />}
                {(wData[1].list[12].weather[0].main === 'Rain' || wData[1].list[12].weather[0].main === 'Thunderstorm' || wData[1].list[12].weather[0].main === 'Drizzle') && <img className={styles.icon} src={rain} alt="rain" />}
                {(wData[1].list[12].weather[0].main === "Snow") && <img className={styles.icon} src={snow} alt="snow" />}
              </div>
              <div className={styles.sum2}>{wData[1].list[12].weather[0].description}</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>{wData[1].list[20].dt_txt.substring(5, 7)}/{wData[1].list[20].dt_txt.substring(8, 10)}</div>
              <div className={styles.sum}> H: {Math.round((9/5)*(wData[1].list[16].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[1].list[20].main.temp_min - 273)+32)}°F</div>
              <div>
                {wData[1].list[20].weather[0].main === 'Clear' && <img className={styles.icon} src={sun} alt="sun" />}
                {(wData[1].list[20].weather[0].main === "Clouds") && <img className={styles.icon} src={cloud} alt="cloud" />}
                {(wData[1].list[20].weather[0].main === 'Rain' || wData[1].list[20].weather[0].main === 'Thunderstorm' || wData[1].list[20].weather[0].main === 'Drizzle') && <img className={styles.icon} src={rain} alt="rain" />}
                {(wData[1].list[20].weather[0].main === "Snow") && <img className={styles.icon} src={snow} alt="snow" />}
              </div>
              <div className={styles.sum2}>{wData[1].list[20].weather[0].description}</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>{wData[1].list[28].dt_txt.substring(5, 7)}/{wData[1].list[28].dt_txt.substring(8, 10)}</div>
              <div className={styles.sum}> H: {Math.round((9/5)*(wData[1].list[32].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[1].list[24].main.temp_min - 273)+32)}°F</div>
              <div>
                {wData[1].list[28].weather[0].main === 'Clear' && <img className={styles.icon} src={sun} alt="sun" />}
                {(wData[1].list[28].weather[0].main === "Clouds") && <img className={styles.icon} src={cloud} alt="cloud" />}
                {(wData[1].list[28].weather[0].main === 'Rain' || wData[1].list[28].weather[0].main === 'Thunderstorm' || wData[1].list[28].weather[0].main === 'Drizzle') && <img className={styles.icon} src={rain} alt="rain" />}
                {(wData[1].list[28].weather[0].main === "Snow") && <img className={styles.icon} src={snow} alt="snow" />}
              </div>
              <div 
              className={styles.sum2}>{wData[1].list[28].weather[0].description}
              </div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>{wData[1].list[36].dt_txt.substring(5, 7)}/{wData[1].list[36].dt_txt.substring(8, 10)}</div>
              <div className={styles.sum}> H: {Math.round((9/5)*(wData[1].list[39].main.temp_max - 273)+32)}°F / L: {Math.round((9/5)*(wData[1].list[36].main.temp_min - 273)+32)}°F</div>
              <div>
                {(wData[1].list[36].weather[0].main === 'Clear') && <img className={styles.icon} src={sun} alt="sun" />}
                {(wData[1].list[36].weather[0].main === "Clouds") && <img className={styles.icon} src={cloud} alt="cloud" />}
                {(wData[1].list[36].weather[0].main === 'Rain' || wData[1].list[4].weather[0].main === 'Thunderstorm' || wData[1].list[4].weather[0].main === 'Drizzle') && <img className={styles.icon} src={rain} alt="rain" />}
                {(wData[1].list[36].weather[0].main === "Snow") && <img className={styles.icon} src={snow} alt="snow" />}
              </div>
              <div className={styles.sum2}>{wData[1].list[36].weather[0].description}</div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default MainPage;
