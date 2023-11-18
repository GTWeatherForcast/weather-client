import React from "react";
import styles from "./main.module.css";
import sunny1 from "./images/sunny1.png";
import NavBar from "./navbar.js";

function MainPage() {
  return (
    <div className={`${styles.mainBody}`}>
      <div className={styles.mainNavDiv}>
        <NavBar />
      </div>

      <div id={styles.today}>
        <div id={styles.cityImage} className={`${styles["city-rectangle"]} ${styles.dropShadow}`}>
        {/* <div id={``} className={`${styles.dropShadow}`}> */}
           <div className={styles["overlay-text"]}>
             <div id={styles.maxMinTemp}> max/min temp </div>
             <div id={styles.currentTemp}> current temp </div>
             <div id={styles.cityName}> city name </div>
           </div>
           <img className={styles.image} src={sunny1} alt="sunny image" />
        </div>

        <div id={styles.hourlyTemp} className={`${styles.rectangle1} ${styles.dropShadow}`}>
        </div>
      </div>

      <div id={styles.future}>

      </div>


    </div>
  );
  // return (
  //   <div className={`${styles.mainBody} ${styles.textStyle}`}>
  //     {/* navbar */}
  //     <NavBar />

  //     {/* today : max/min temp, city, temperature */}
  //     <div id={styles.today}>
  //       <div className={styles.center}>
  //         {/* TODO : make image random */}
  //         <div id={styles.cityImage} className={`${styles["city-rectangle"]} ${styles.dropShadow}`}>
  //           <div className={styles["overlay-text"]}>
  //             <div id={styles.maxMinTemp}> max/min temp </div>
  //             <div id={styles.currentTemp}> current temp </div>
  //             <div id={styles.cityName}> city name </div>
  //           </div>
  //           <img className={styles.image} src={sunny1} alt="sunny image" />
  //         </div>
  //         <div id={styles.hourlyTemp} className={`${styles.rectangle1} ${styles.dropShadow}`}>

  //         </div>
  //       </div>

  //       {/* add hourly info  */}
  //       {/* <br /> */}

  //       <div className={styles.center}>
  //         <div id={styles.information} className={`${styles["info-rectangle"]} ${styles.dropShadow}`}>
  //           <div>
  //             information : humidity, air quality, uv index, precipitation
  //           </div>
  //         </div>
  //       </div>

  //       {/* <br /> */}
  //     </div>

  //     {/* end today */}

  //     {/* 10 day : max/min temp, weather icon, short summary */}
  //     {/* <br /> */}
  //     <div className={styles.center}>
  //       <div id={styles["10day"]} className={`${styles.rectangle} ${styles.dropShadow}`}>
  //         <div> 10 day summary</div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default MainPage;
