import React from "react";
import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { triggerEvent } from "../services/actions";

const Card = ({ text, number, counter }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <p className={styles.card__text}>{text}</p>
      <button
        onClick={() => dispatch(triggerEvent(number, counter))}
        className={styles.card__btn}
      >
        Choose
      </button>
    </div>
  );
};

export default Card;
