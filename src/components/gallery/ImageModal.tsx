import { useEffect, useCallback, useState } from "react";
import Loader from "react-loader-spinner";

import "./ImageModal.css";
import Modal from "../UI/Modal";
import BackArrow from "../UI/icons/BackArrow";
import ForwardArrow from "../UI/icons/ForwardArrow";
import CloseButton from "../UI/buttons/CloseButton";
import { Image } from "../../model/image.interface";

interface ImageModalProps {
  image: Image;
  onClose: () => void;
  onBackPressed: () => void;
  onForwardPressed: () => void;
}

const ImageModal = ({
  image,
  onClose,
  onBackPressed,
  onForwardPressed,
}: ImageModalProps) => {
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
    setImageIsLoaded(false);
  }, [image]);

  useEffect(() => {
    window.addEventListener("keydown", keyPressedHandler);
    return () => window.removeEventListener("keydown", keyPressedHandler);
  }, [keyPressedHandler]);

  const imageLoadedHandler = () => {
    setImageIsLoaded(true);
  };

  return (
    <Modal onClose={onClose}>
      <>
        <div
          className={imageIsLoaded ? "hidden" : "loading-animation-container"}
        >
          <Loader type="TailSpin" color="#e1e1e1" height={100} width={100} />
        </div>
        <div className={imageIsLoaded ? "image-container" : "hidden"}>
          <div
            onKeyDown={keyPressedHandler}
            onClick={onBackPressed}
            className="arrow-container back-arrow"
          >
            <BackArrow />
          </div>
          <img
            className="image"
            src={image.imageUrl}
            alt={image.alt}
            onLoad={imageLoadedHandler}
          />
          <div className="close-button">
            <CloseButton onClick={onClose} />
          </div>
          <div
            onClick={onForwardPressed}
            className="arrow-container forward-arrow"
          >
            <ForwardArrow />
          </div>
        </div>
      </>
    </Modal>
  );
};

export default ImageModal;
