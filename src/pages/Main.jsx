import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Main.module.scss";
import torch from "../images/Torch.gif";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Modal from "../components/Modal";

const Main = ({ active, setActive }) => {
  const { event } = useSelector((state) => state.dataReducer);
  useEffect(() => {
    setActive(true);
  }, []);
  return (
    <section className={styles.main__section}>
      <Modal active={active} setActive={setActive} text={event.main} />
      <div className={styles.main__container}>
        <Stats />
        <Card text={event.option1} />
        <Card text={event.option2} />
        <Card text={event.option3} />
      </div>
      <img src={torch} alt="Torch" className={styles.main__torch} />
    </section>
  );
};

export default Main;
