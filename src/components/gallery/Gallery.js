import { useState, useEffect } from "react";

import styles from "./Gallery.module.css";
import ImageModal from "./ImageModal";

const IMAGES_PER_ROW = 3;

const getRows = (images, imagesPerRow) => {
  const numberOfRows = Math.ceil(images.length / imagesPerRow);

  const tmpImages = [...images];

  const rows = new Array(numberOfRows)
    .fill()
    .map((_) => tmpImages.splice(0, imagesPerRow));

  return rows;
};

const Gallery = ({ images }) => {
  const [rows, setRows] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [displayedImage, setDisplayedImage] = useState(null); // Image displayed in ImageModal

  const imageClickedHandler = (image) => {
    setDisplayedImage(image);
    setShowImageModal(true);
  };

  const closeModalHandler = () => {
    setShowImageModal(false);
  };

  useEffect(() => {
    setRows([]);
    if (!images) return;

    const imageRows = getRows(images, IMAGES_PER_ROW);

    for (const row of imageRows) {
      const rows = (
        <div key={Math.random()} className={styles["row"]}>
          {row.map((image) => (
            <img
              key={image.id}
              src={image["preview-url"]}
              alt={image.description}
              onClick={imageClickedHandler.bind(null, image)}
            />
          ))}
        </div>
      );
      setRows((prevRows) => [...prevRows, rows]);
      setDisplayedImage(images[0]);
    }
  }, [images]);

  return (
    <>
      {showImageModal && (
        <ImageModal onClose={closeModalHandler} image={displayedImage} />
      )}
      <div
        className={`${styles["row-container"]} ${
          showImageModal ? styles["no-scroll"] : ""
        }`}
      >
        {rows}
      </div>
    </>
  );
};

export default Gallery;
