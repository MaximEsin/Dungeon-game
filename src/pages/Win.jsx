import React from "react";
import styles from "../styles/Win.module.scss";
import treasure from "../images/treasure.png";

const Win = () => {
  return (
    <section className={styles.win}>
      <p className={styles.win__text}>Congratulations! You have WON!</p>
      <img alt="Treasure" src={treasure} />
    </section>
  );
};

export default Win;
