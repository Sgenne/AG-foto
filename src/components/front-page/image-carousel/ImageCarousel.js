import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";

import styles from "./ImageCarousel.module.css";

const ALT_TEXT = "Ann-Marie Genne photography";

const TRANSITION_DURATION = 2000;
const IMAGE_DURATION = 8000;

const CURRENT_IMAGE_CLASSNAMES = {
  entering: styles["entering"],
  entered: styles["entered"],
  exiting: styles["exiting"],
  exited: styles["exited"],
};

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, IMAGE_DURATION);

    return () => clearInterval(interval);
  }, [images]);

  if (!images) {
    return <div></div>;
  }

  const displayedImages = images.map((image, index) => (
    <Transition
      in={index === currentImageIndex}
      timeout={TRANSITION_DURATION}
      key={image._id}
    >
      {(state) => {
        return (
          <img
            className={`${styles["current-image"]} ${CURRENT_IMAGE_CLASSNAMES[state]}`}
            src={image.imageUrl}
            alt={ALT_TEXT}
          />
        );
      }}
    </Transition>
  ));

  return <div className={styles["image-carousel"]}>{displayedImages}</div>;
};

export default ImageCarousel;
