import React from "react";

const ScrollingText = ({ text, speed = 20}) => {
  const animationDuration = `${text.length / speed}s`;

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.text,
          animationDuration,
        }}
      >
        {text}
        <span style={{ marginLeft: "2rem" }}>{text}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    backgroundColor: "#000", // Gray background
    padding: "1rem",
    boxSizing: "border-box",
    position: "relative",
    padding: "20px 100px",
  },
  text: {
    display: "inline-block",
    color: "#fff", // Dark gray text
    fontSize: "1.25rem", // 20px
    fontWeight: "bold",
    animation: "scrollText linear infinite",
  },
};

export default ScrollingText;
