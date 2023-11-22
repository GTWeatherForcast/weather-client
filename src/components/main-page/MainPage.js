import React, { useState } from "react";
import styles from "./main.module.css";
import cloud from "./images/cloud.png";
import snow from "./images/snow.png";
import rain from "./images/rain.png";
import sun from "./images/sun.png";
import NavBar from "./navbar.js";
import HorizontalLine from "./HorizontalLine.js";

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
            <div className={`${styles.cityImg} ${styles.card}`}></div>

            <div className={`${styles.detailedInfo} ${styles.card}`}></div>
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
