import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useBackend from "../../hooks/use-backend";
import styles from "./CategorySelector.module.css";

const CategorySelector = (props) => {
  const [categories, setCategories] = useState([]);
  const [currentImageSrc, setCurrentImageSrc] = useState(null);

  const { getGalleryCategories } = useBackend();

  useEffect(() => {
    getGalleryCategories((result) => {
      setCategories(result.categories);

      // set currentImageSrc to first category image
      setCurrentImageSrc(result.categories[0].previewImage.compressedImageUrl);
    });
  }, [getGalleryCategories]);

  // When the mouse hovers over a link, the preview
  // image of the corresponding category is shown.
  const linkHoverHandler = (imgSrc) => {
    setCurrentImageSrc(imgSrc);
  };

  if (!categories) {
    return <div></div>;
  }

  const categoryListContent = categories.map((category) => {
    return (
      <span
        className={styles["link-container"]}
        onMouseOver={() =>
          linkHoverHandler(category.previewImage.compressedImageUrl)
        }
        key={category.title}
      >
        <Link to={`/gallery/${category.title.toLowerCase()}`}>
          {category.title}
        </Link>
      </span>
    );
  });

  // the image of the last category to be hovered
  const categoryImageContent = currentImageSrc ? (
    <img src={currentImageSrc} alt="category" />
  ) : (
    <div></div>
  );

  return (
    <div
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
      className={styles["container"]}
    >
      <div className={styles["category-list"]}>{categoryListContent}</div>
      <div className={styles["image-container"]}>{categoryImageContent}</div>
    </div>
  );
};

export default CategorySelector;
