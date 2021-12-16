import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";

import styles from "./ScrollingImages.module.css";

const ALT_TEXT = "Ann-Marie Genne photography";

const TRANSITION_DURATION = 2000;
const IMAGE_DURATION = 8000;

const CURRENT_IMAGE_CLASSNAMES = {
  entering: styles["entering"],
  entered: styles["entered"],
  exiting: styles["exiting"],
  exited: styles["exited"],
};

const ScrollingImages = ({ images, onLoad }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nUnloadedImages, setNUnloadedImages] = useState();

  useEffect(() => {
    if (!images) return;

    setNUnloadedImages(images.length);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, IMAGE_DURATION);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    if (nUnloadedImages === 0) {
      onLoad();
    }
  }, [nUnloadedImages, onLoad]);

  const imageLoadedHandler = () => {
    setNUnloadedImages((prevValue) => prevValue - 1);
  };

  if (!images) {
    return <div></div>;
  }

  const displayedImages = images.map((image, index) => (
    <Transition
      in={index === currentImageIndex}
      timeout={TRANSITION_DURATION}
      key={image._id}
      className={styles["transition"]}
    >
      {(state) => {
        return (
          <img
            className={`${styles["current-image"]} ${CURRENT_IMAGE_CLASSNAMES[state]}`}
            src={image.imageUrl}
            alt={ALT_TEXT}
            onLoad={imageLoadedHandler}
            style={{
              objectFit: "cover",
            }}
          />
        );
      }}
    </Transition>
  ));

  return <>{displayedImages}</>;
};

export default ScrollingImages;
