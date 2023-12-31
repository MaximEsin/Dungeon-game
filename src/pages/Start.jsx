import React from "react";
import styles from "../styles/Start.module.scss";
import entrance from "../images/Entrance.jpeg";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img className={styles.img} src={entrance} alt="Dungeon entrance" />
        <Link to="/main">
          <button className={styles.btn}>Enter</button>
        </Link>
      </div>
    </section>
  );
};

export default Start;
