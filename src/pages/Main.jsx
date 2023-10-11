import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Main.module.scss";
import torch from "../images/Torch.gif";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Modal from "../components/Modal";

const Main = ({ active, setActive }) => {
  const { event, counter } = useSelector((state) => state.dataReducer);
  useEffect(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    setActive(true);
  }, [counter]);

  return (
    <section className={styles.main__section}>
      <Modal
        active={active}
        setActive={setActive}
        text={event.main}
        img={event.mainImg}
      />
      <div className={styles.main__container}>
        <Stats />
        <Card
          text={event.option1}
          img={event.img1}
          number="1"
          counter={counter}
        />
        <Card
          text={event.option2}
          img={event.img2}
          number="2"
          counter={counter}
        />
        <Card
          text={event.option3}
          img={event.img3}
          number="3"
          counter={counter}
        />
      </div>
      <img src={torch} alt="Torch" className={styles.main__torch} />
    </section>
  );
};

export default Main;
