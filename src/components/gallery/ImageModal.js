import { useEffect, useCallback, useState } from "react";

import styles from "./ImageModal.module.css";
import Modal from "../UI/Modal";
import BackArrow from "../UI/icons/BackArrow";
import ForwardArrow from "../UI/icons/ForwardArrow";

const ImageModal = ({ image, onClose, onBackPressed, onForwardPressed }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  const keyPressedHandler = useCallback(
    (event) => {
      const pressedKey = event.key.toLowerCase();

      const forwardKeys = [" ", "enter", "arrowright"];
      const backKeys = ["arrowleft"];
      const closeKeys = ["escape"];

      if (forwardKeys.includes(pressedKey)) {
        onForwardPressed();
      } else if (backKeys.includes(pressedKey)) {
        onBackPressed();
      } else if (closeKeys.includes(pressedKey)) {
        onClose();
      }
    },
    [onBackPressed, onForwardPressed, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyPressedHandler);
    return () => window.removeEventListener("keydown", keyPressedHandler);
  }, [keyPressedHandler]);

  const imageLoadedHandler = () => {
    console.log("loaded");
    setImageIsLoaded(true);
  };

  return (
    <Modal onClose={onClose}>
      <div
        className={
          imageIsLoaded
            ? styles["hidden"]
            : styles["loading-animation-container"]
        }
      ></div>
      <div
        className={imageIsLoaded ? styles["image-container"] : styles["hidden"]}
      >
        <div
          onKeyDown={keyPressedHandler}
          onClick={onBackPressed}
          className={`${styles["arrow-container"]} ${styles["back-arrow"]}`}
        >
          <BackArrow />
        </div>
        <img
          className={styles["image"]}
          src={image["download-url"]}
          alt={image.title}
          onLoad={imageLoadedHandler}
        />
        <div
          onClick={onForwardPressed}
          className={`${styles["arrow-container"]} ${styles["forward-arrow"]}`}
        >
          <ForwardArrow />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
