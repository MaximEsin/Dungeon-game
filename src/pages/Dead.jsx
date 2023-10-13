import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styles from "../styles/Dead.module.scss";
import deadImg from "../images/Dead.png";
import { restartGame } from "../services/actions";

const Dead = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetGame = () => {
    dispatch(restartGame());
    navigate("/", { replace: true });
  };
  return (
    <section className={styles.dead}>
      <p className={styles.dead__text}>
        <span className={styles.dead__span}>You have died.</span> Probably your
        previous choice didn't work well.
      </p>
      <img className={styles.dead__img} src={deadImg} alt="You are dead" />
      <button className={styles.dead__btn} onClick={() => resetGame()}>
        Restart
      </button>
    </section>
  );
};

export default Dead;
