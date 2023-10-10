import React from "react";
import styles from "./Card.module.scss";

const Card = ({ text }) => {
  return (
    <div className={styles.card}>
      <p className={styles.card__text}>{text}</p>
      <button className={styles.card__btn}>Choose</button>
    </div>
  );
};

export default Card;
