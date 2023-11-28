import React from "react";
import FormInput from "../inputs/FormInput";
import styles from "./RangeSlider.module.css";

function RangeSlider_ReadOnly({minVal = 0, maxVal = 1, initialVal = 0.5, step = 0.01}) {
  return (
    <div class={styles.container}>
      <input class={styles.slider} type="range" value={initialVal} min={minVal} max={maxVal} step={step} disabled/>
    </div>
  );
}

export default RangeSlider_ReadOnly;