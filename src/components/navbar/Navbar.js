import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import CategorySelector from "./CategorySelector";

const Navbar = () => {
  const [galleryCategoriesExpanded, setGalleryCategoriesExpanded] = useState(false);

  const galleryMouseOverHandler = () => {
    setGalleryCategoriesExpanded(true);
  };

  const galleryMouseOutHandler = () => {
    setGalleryCategoriesExpanded(false);
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
          <NavLink className={styles["category-link"]} to="/galleri">Galleri</NavLink>
            <div className={`${styles["category-dropdown"]} ${!galleryCategoriesExpanded ? styles["categories-hidden"] : ""}`}>
              <CategorySelector onMouseOver={galleryMouseOverHandler} onMouseOut={galleryMouseOutHandler} />
            </div>
        </div>
        <NavLink to="/">Blogg</NavLink>
        <NavLink to="/">Kontakt</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
