import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";

import styles from "./ImageCarousel.module.css";

// const ALT_TEXT = "Ann-Marie Genne photography";

const TRANSITION_DURATION = 1500;
const IMAGE_DURATION = 8000;

const CURRENT_IMAGE_CLASSNAMES = {
  entering: styles["current-image-entering"],
  entered: styles["current-image-entered"],
  exiting: styles["prev-image-exiting"],
  exited: styles["prev-image-exited"],
};

const PREV_IMAGE_CLASSNAMES = {
  entering: styles["prev-image-exiting"],
  entered: styles["prev-image-exited"],
}


const ImageCarousel = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { images } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, IMAGE_DURATION);

    return () => clearInterval(interval);
  }, [images]);

  const prev_image_index =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

  const carouselContent = images.map(
    (image, index) => ( 
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
            <img src={image.src} alt={image.id} />
          </div>
        )}}
      </Transition>
    )
    // return (
    //   <CSSTransition key={image.id} in={index === currentImageIndex} classNames=>
    //     <div>
    //       <img src={image.src} alt={image.id} />
    //     </div>
    //   </CSSTransition>
    // )

    // const styleClass =
    //   index === currentImageIndex
    //     ? styles["current-image-container"]
    //     : styles["hidden-image-container"];

    // return (
    //   <div className={styleClass}>
    //     <img src={image.src} alt={ALT_TEXT} />
    //   </div>
    // );
  );

  console.log(`transitioning from ${images[prev_image_index].src} to ${images[currentImageIndex].src}`)


  return <div className={styles["container"]}>{carouselContent}</div>;
};

export default ImageCarousel;
