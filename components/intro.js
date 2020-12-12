import React from "react";
import styles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro__title}>Hey, I'm Tiago</div>
      <p>Full-Stack Software Engineer</p>
      <p className={styles.intro__origin}>Portugal</p>
      <p>Graduated in Software Engineering in 2017</p>
      <p>I enjoy learning, coding, tech and more.</p>
    </div>
  );
};

export default Intro;
