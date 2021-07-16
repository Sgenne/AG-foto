import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">Om</Link>
        <div
          onMouseOver={galleryMouseOverHandler}
          onMouseOut={galleryMouseOutHandler}
          className={styles["dropdown-container"]}
        >
          <Link to="/gallery">Galleri</Link>
            <div className={`${styles["category-dropdown"]} ${!galleryCategoriesExpanded ? styles["categories-hidden"] : ""}`}>
              <CategorySelector onMouseOver={galleryMouseOverHandler} onMouseOut={galleryMouseOutHandler} />
            </div>
        </div>
        <Link to="/">Blogg</Link>
        <Link to="/">Kontakt</Link>
      </div>
    </div>
  );
};

export default Navbar;
