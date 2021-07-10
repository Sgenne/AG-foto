import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./CategorySelector.module.css";

import img1 from "../../dummyImages/benches.jpg";
import img2 from "../../dummyImages/canoes.jpg";
import img3 from "../../dummyImages/fishing.jpg";
import img4 from "../../dummyImages/hills.jpg";
import img5 from "../../dummyImages/forrest.jpg";

const DUMMY_CATEGORIES = [
  {
    categoryName: "Arkitektur",
    categoryPath: "#",
    categoryImgSrc: img1,
  },
  {
    categoryName: "Djur",
    categoryPath: "#",
    categoryImgSrc: img2,
  },
  {
    categoryName: "Landskap",
    categoryPath: "#",
    categoryImgSrc: img3,
  },
  {
    categoryName: "Macro",
    categoryPath: "#",
    categoryImgSrc: img4,
  },
  {
    categoryName: "Människor",
    categoryPath: "#",
    categoryImgSrc: img5,
  },
];

const CategorySelector = (props) => {
  const [currentImageSrc, setCurrentImageSrc] = useState(
    DUMMY_CATEGORIES[0].categoryImgSrc
  );

  const linkHoverHandler = (imgSrc) => {
    console.log(imgSrc)
    setCurrentImageSrc(imgSrc);
  };

  const categoryListContent = DUMMY_CATEGORIES.map((category) => (
    <div onMouseOver={linkHoverHandler.bind(null, category.categoryImgSrc)}>
      <NavLink to={category.categoryPath}>{category.categoryName}</NavLink>
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
