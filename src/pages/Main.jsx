import React from "react";
import styles from "../styles/Main.module.scss";
import torch from "../images/Torch.gif";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Modal from "../components/Modal";

const Main = ({ active, setActive }) => {
  return (
    <section className={styles.main__section}>
      <Modal active={active} setActive={setActive} />
      <div className={styles.main__container}>
        <Stats />
        <Card />
        <Card />
        <Card />
      </div>
      <img src={torch} alt="Torch" className={styles.main__torch} />
    </section>
  );
};

export default Main;
