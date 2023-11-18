import React from "react";
import styles from "./main.module.css";
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
            <div className={`${styles.cityImg} ${styles.card} ${styles.weatherSunny}`}></div>

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
