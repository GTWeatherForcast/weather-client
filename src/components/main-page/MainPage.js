import React from "react";
import styles from "./main.module.css";
import styles2 from "./cityimg.module.css";
import NavBar from "./navbar.js";
import HorizontalLine from "./HorizontalLine.js";

function MainPage() {
  return (
    <div className={`${styles.mainBody}`}>
      <div className={styles.mainNavDiv}>
        <NavBar />
      </div>

      <div className={styles.contentBody}>
        <div className={styles.today}>
          <div className={styles.leftCard}>
            <div className={`${styles.mainInfo} ${styles.card} ${styles2.weatherSunny}`}>
              <div className={`${styles2.cityImg}`}>

              </div>
              <div className={`${styles.overlayText}`}>
                <div id={`${styles.todayHighLow}`}>
                  97°F/89°F
                </div>
                <div id={`${styles.currentTemp}`}>
                  95°F
                </div>
                <div id={`${styles.currentLocation}`}>
                  Atlanta, GA
                </div>
              </div>
            </div>

            <div className={`${styles.detailedInfo} ${styles.card}`}></div>
          </div>

          <div className={`${styles.hourlyForecast} ${styles.card}`}></div>
        </div>

        <div
          className={`${styles.tenDayForecast} ${styles.card} ${styles.textStyle}`}
        >
          10 DAY FORECAST
          <div className={styles.lineContainer}>
            <div className={styles.margin}></div>
            <HorizontalLine />
            <div className={styles.margin}></div>
            <HorizontalLine />
            <div className={styles.margin}></div>
            <HorizontalLine />
            <div className={styles.margin}></div>
            <HorizontalLine />
            <div className={styles.margin}></div>
            <HorizontalLine />
            <div className={styles.margin}></div>
            <HorizontalLine />
            <div className={styles.margin}></div>
            <HorizontalLine />
            <div className={styles.margin}></div>
            <HorizontalLine />
            <div className={styles.margin}></div>
            <HorizontalLine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
