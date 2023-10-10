import React from "react";
import styles from "./Stats.module.scss";
import { useSelector } from "react-redux";
import hp from "../images/HP.webp";
import coins from "../images/Coins.webp";
import dmg from "../images/DPS.webp";

const Stats = () => {
  const { health, damage, money } = useSelector((state) => state.dataReducer);
  return (
    <div className={styles.stats}>
      <div className={styles.stats__itemContainer}>
        <p className={styles.stats__text}>HP: {health}</p>
        <img src={hp} alt="Health" className={styles.stats__img} />
      </div>
      <div className={styles.stats__itemContainer}>
        <p className={styles.stats__text}>Damage: {damage}</p>
        <img src={dmg} alt="Damage" className={styles.stats__img} />
      </div>
      <div className={styles.stats__itemContainer}>
        <p className={styles.stats__text}>Coins: {money}</p>
        <img src={coins} alt="Coins" className={styles.stats__img} />
      </div>
    </div>
  );
};

export default Stats;
