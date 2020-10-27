import React from "react";
import styles from "../styles/SvgIcon.module.css";

const SvgIcon = ({ path, height, name, bgColor, borderRadius, animated }) => {
  return (
    <div
      className={animated ? `${styles.icon} ${styles.animated}` : styles.icon}
      style={
        bgColor ? { backgroundColor: bgColor, borderRadius: borderRadius } : {}
      }
    >
      <img src={path} height={height} />
      <div className={styles.icon__tooltip}>{name.toUpperCase()}</div>
    </div>
  );
};

export default SvgIcon;
