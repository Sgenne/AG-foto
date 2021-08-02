import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import styles from "./Gallery.module.css";
import ImageModal from "./ImageModal";

const Gallery = ({ images }) => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0); // Index of image displayed in ImageModal.
  const [numberOfLoadedImages, setNumberOfLoadedImages] = useState(0);

  const imageClickedHandler = (index) => {
    setDisplayedImageIndex(index);
    setShowImageModal(true);
  };

  const closeModalHandler = () => {
    setShowImageModal(false);
  };

  const forwardPressedHandler = () => {
    setDisplayedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const backPressedHandler = () => {
    setDisplayedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const imageIsLoadedHandler = () => {
    setNumberOfLoadedImages((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    if (!images) return;
    const mappedImages = images.map((image, index) => (
      <img
        key={image.id}
        src={image["preview-url"]}
        alt={image.description}
        onClick={imageClickedHandler.bind(null, index)}
        onLoad={imageIsLoadedHandler}
      />
    ));
    setGalleryImages(mappedImages);
    setDisplayedImageIndex(0);
    setNumberOfLoadedImages(0);
  }, [images]);

  const hideImages = !images || numberOfLoadedImages < images.length;

  return (
    <>
      <div
        className={`${
          hideImages ? styles["loading-spinner-container"] : styles["hidden"]
        }`}
      >
        <Loader type="TailSpin" color="#000000" height={100} width={100} />
      </div>
      <div className={`${hideImages ? styles["hidden"] : ""}`}>
        {showImageModal && (
          <ImageModal
            onBackPressed={backPressedHandler}
            onForwardPressed={forwardPressedHandler}
            onClose={closeModalHandler}
            image={images[displayedImageIndex]}
          />
        )}
        <div className={styles["image-container"]}>{galleryImages}</div>
      </div>
    </>
  );
};

export default Gallery;
