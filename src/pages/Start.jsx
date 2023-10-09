import React from "react";
import styles from "../styles/Start.module.scss";
import entrance from "../images/entrance.jpg";

const Start = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img className={styles.img} src={entrance} alt="Dungeon entrance" />
        <button className={styles.btn}>Start</button>
      </div>
    </section>
  );
};

export default Start;
