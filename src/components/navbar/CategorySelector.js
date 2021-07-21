import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import FirebaseContext from "../../store/firebase-context";
import styles from "./CategorySelector.module.css";

const CategorySelector = (props) => {
  const [categories, setCategories] = useState([]);
  const [currentImageSrc, setCurrentImageSrc] = useState(null);

  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await firebaseContext.getGalleryCategories();
      setCategories(categories);
      setCurrentImageSrc(categories[0]["category-image"]);
    };
    fetchCategories();
  }, [firebaseContext]);

  const linkHoverHandler = (imgSrc) => {
    setCurrentImageSrc(imgSrc);
  };

  if (!categories) {
    return <div></div>;
  }

  const categoryListContent = categories.map((category) => (
    <div
      className={styles["link-container"]}
      onMouseOver={linkHoverHandler.bind(null, category["category-image"])}
      key={category["category-name"]}
    >
      <Link to={`/gallery/${category["category-name"]}`}>{category["category-name"]}</Link>
    </div>
  ));

  const categoryImageContent = <img src={currentImageSrc} alt="category" />;

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
