import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <>
      <div className={styles["background"]} onClick={onClose} />
      <div className={styles["modal-container"]}>
        {children}
      </div>
    </>
  );
};

export default Modal;
