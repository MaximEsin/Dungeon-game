import React from "react";
import styles from "../styles/Dead.module.scss";
import deadImg from "../images/Dead.png";

const Dead = () => {
  return (
    <section className={styles.dead}>
      <p className={styles.dead__text}>
        <span className={styles.dead__span}>You have died.</span> Probably your
        previous choice didn't work well.
      </p>
      <img className={styles.dead__img} src={deadImg} alt="You are dead" />
    </section>
  );
};

export default Dead;
