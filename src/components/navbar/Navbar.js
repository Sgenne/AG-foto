import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import CategorySelector from "./CategorySelector";

const Navbar = () => {
  const [showGalleryCategories, setShowGalleryCategories] = useState(false);

  const galleryMouseOverHandler = () => {
    setShowGalleryCategories(true);
  };

  const galleryMouseOutHandler = () => {
    setShowGalleryCategories(false);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["links-section"]}>
        <NavLink to="/">Om</NavLink>
        <div
          onMouseOver={galleryMouseOverHandler}
          onMouseOut={galleryMouseOutHandler}
          className={styles["link-container"]}
        >
          <NavLink to="/galleri">Galleri</NavLink>
          {showGalleryCategories && (
            <div className={styles["gallery-category-selector"]}>
              <CategorySelector onMouseOver={galleryMouseOverHandler} onMouseOut={galleryMouseOutHandler} />
            </div>
          )}
        </div>
        <NavLink to="/">Blogg</NavLink>
        <NavLink to="/">kontakt</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
