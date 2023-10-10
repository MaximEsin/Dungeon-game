import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <p className={styles.card__text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
        veniam maiores a voluptates nesciunt! Adipisci perferendis dolorem
        eligendi reiciendis nostrum explicabo quibusdam, facere, dolores
        voluptates error impedit omnis soluta pariatur!
      </p>
      <button className={styles.card__btn}>Choose</button>
    </div>
  );
};

export default Card;
