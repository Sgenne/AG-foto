import styles from "./CloseButton.module.css";
import CloseImage from "../icons/CloseImage";

const CloseButton = (props) => {
  return (
    <button className={styles["button"]} onClick={props.onClick}>
      <span className={styles["icon"]}>
        <CloseImage />
      </span>
    </button>
  )
}

export default CloseButton
