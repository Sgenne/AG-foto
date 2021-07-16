import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";

import styles from "./ImageCarousel.module.css";

const ALT_TEXT = "Ann-Marie Genne photography";

const TRANSITION_DURATION = 2000;
const IMAGE_DURATION = 5000;

const CURRENT_IMAGE_CLASSNAMES = {
  entering: styles["current-image-entering"],
  entered: styles["current-image-entered"],
  exiting: styles["prev-image-exiting"],
  exited: styles["prev-image-exited"],
};

const ImageCarousel = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState(null);

  const { images } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, IMAGE_DURATION);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    setDisplayedImages(
      images.map((image, index) => (
        <Transition
          in={index === currentImageIndex}
          timeout={TRANSITION_DURATION}
          key={image.id}
        >
          {(state) => {
            return (
              <div
                className={`${styles["image-container"]} ${CURRENT_IMAGE_CLASSNAMES[state]}`}
              >
                <img src={image["download-url"]} alt={ALT_TEXT} />
              </div>
            );
          }}
        </Transition>
      ))
    ); 
  }, [images, currentImageIndex])

  console.log("current image: ")
  console.log(images[currentImageIndex])

  return (
    <div className={styles["container"]}>
      {displayedImages}
    </div>
  );
};

export default ImageCarousel;
