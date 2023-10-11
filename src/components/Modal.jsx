import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ active, setActive, text, img }) => {
  const isOpen = active;

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        setActive(false);
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [isOpen]);

  return (
    <div
      className={active ? styles.modalOverlay_active : styles.modalOverlay}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setActive(false);
        }
      }}
    >
      <section className={styles.modal}>
        <p className={styles.modal__text}>{text}</p>
        <img src={img} alt="Modal image" className={styles.modal__img} />
        <button onClick={() => setActive(false)} className={styles.modal__btn}>
          Continue
        </button>
      </section>
    </div>
  );
};

export default Modal;
