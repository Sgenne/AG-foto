import styles from "./Modal.module.css";
import CloseButton from "./buttons/CloseButton";

const Modal = (props) => {
  return (
    <>
      <div className={styles["background"]} />
      <div className={styles["modal-container"]}>
        <CloseButton />
        {props.children}</div>
    </>
  );
};

export default Modal;
