import { useState, useEffect } from "react";

import styles from "./Gallery.module.css";

const IMAGES_PER_ROW = 3;

// Converts a list of images into a list of lists of images, i.e. a list of rows of images.
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

  const imageClickedHandler = (imageId) => {
    console.log(imageId);
  };

  useEffect(() => {
    const imageRows = getRows(images, IMAGES_PER_ROW);

    for (const row of imageRows) {
      const rows = (
        <div key={Math.random()} className={styles["row"]}>
          {row.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt="deez nutz"
              onClick={imageClickedHandler.bind(null, image.id)}
            />
          ))}
        </div>
      );
      setRows((prevRows) => [...prevRows, rows]);
    }
  }, [images]);

  return <div className={styles["row-container"]}>{rows}</div>;
};

export default Gallery;
