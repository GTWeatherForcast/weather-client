import React from "react";

const HorizontalLine = () => {
  const lineStyle = {
    display: "flex",
    width: "500px", // Width of the horizontal line
    height: "1px", // Adjust the height as needed
    backgroundColor: "#4D4D4D", // Color of the line
  };

  return <div style={lineStyle}></div>;
};

export default HorizontalLine;
