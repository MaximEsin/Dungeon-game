import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ active, setActive }) => {
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
        <p className={styles.modal__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          maiores voluptates id eaque, consectetur aspernatur exercitationem.
          Animi quos distinctio eligendi cumque, dolor repellendus deserunt,
          dolore, ut sint hic sunt. Sunt.
        </p>
        <button onClick={() => setActive(false)} className={styles.modal__btn}>
          Continue
        </button>
      </section>
    </div>
  );
};

export default Modal;
