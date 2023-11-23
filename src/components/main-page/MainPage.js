import React, { useState } from "react";
import styles from "./main.module.css";
import styles2 from "./cityimg.module.css";
import NavBar from "./navbar.js";
import HorizontalLine from "./HorizontalLine.js";
import RangeSlider_ReadOnly from "./RangeSlider.js";
import cloud from "./images/cloud.png";

// todo: make the values in detailData linked with a prop/state so we can update them on the fly and also link the subtitle/sliders automatically
function MainPage() {
  const [textColor, setTextColor] = useState(styles.originalColor);

  const dateOnClick = () => {
    // change color
    setTextColor(styles.clickedColor);
    // update right side info
  };

  return (
    <div className={`${styles.mainBody}`}>
      <div className={styles.mainNavDiv}>
        <NavBar />
      </div>

      <div className={styles.contentBody}>
        <div className={styles.today}>
          <div className={styles.leftCard}>
            {/* Change styles2.weatherSunny to other weather conditions */}
            <div
              className={`${styles.mainInfo} ${styles.card} ${styles2.weatherSunny}`}
            >
              <div className={`${styles2.cityImg}`}></div>
              <div className={`${styles.overlayText}`}>
                <div id={`${styles.todayHighLow}`}>97°F / 89°F</div>
                <div id={`${styles.currentTemp}`}>95°F</div>
                <div id={`${styles.currentLocation}`}>Atlanta, GA</div>
              </div>
            </div>

            <div className={`${styles.detailedInfo} ${styles.card}`}>
              <div id={styles.detailHumid} className={`${styles.detailCard}`}>
                <h1>HUMIDITY</h1>
                <p className={styles.detailData}>53%</p>
                <p className={styles.detailSubtitle}>Dew point: 64°F</p>
              </div>

              <div id={styles.detailAQ} className={`${styles.detailCard}`}>
                <h1>AIR QUALITY</h1>
                <p className={styles.detailData}>40</p>
                <div>
                  <p className={styles.detailSubtitle}>Good</p>
                  <RangeSlider_ReadOnly
                    initialVal={40}
                    minVal={0}
                    maxVal={301}
                    step={1}
                  />
                </div>
              </div>

              <div id={styles.detailUV} className={`${styles.detailCard}`}>
                <h1>UV INDEX</h1>
                <p className={styles.detailData}>5</p>
                <div>
                  <p className={styles.detailSubtitle}>Moderate</p>
                  <RangeSlider_ReadOnly
                    initialVal={5}
                    minVal={1}
                    maxVal={11}
                    step={1}
                  />
                </div>
              </div>

              <div id={styles.detailPrecip} className={`${styles.detailCard}`}>
                <h1>PRECIPITATION</h1>
                <p className={styles.detailData}>0"</p>
                <p className={styles.detailSubtitle}>in the next 12 hours</p>
              </div>
            </div>
          </div>

          <div className={`${styles.hourlyForecast} ${styles.card}`}></div>
        </div>

        <div
          className={`${styles.tenDayForecast} ${styles.card} ${styles.textStyle}`}
        >
          <div className={styles.title}>10 DAY FORECAST</div>
          {/* <div className={styles.cdIconContainer}>
            <img className={styles.currentDateIcon} src={cloud} alt="cloud" />
          </div> */}
          <div className={styles.lineContainer}>
            <div className={styles.tContainer} onClick={dateOnClick}>
              <div className={styles.margin} style={{ color: textColor }}>
                Day MM/DD
              </div>
              <div className={styles.sum} style={{ color: textColor }}>
                high / low
              </div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2} style={{ color: textColor }}>
                weatherSummary
              </div>
            </div>
            <HorizontalLine />

            <div className={styles.tContainer} onClick={dateOnClick}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
            <HorizontalLine />
            <div className={styles.tContainer}>
              <div className={styles.margin}>Day MM/DD</div>
              <div className={styles.sum}> high / low</div>
              <div>
                <img className={styles.icon} src={cloud} alt="cloud" />
              </div>
              <div className={styles.sum2}>weatherSummary</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
