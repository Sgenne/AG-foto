import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import CategorySelector from "./CategorySelector";
import LinkDropdown from "../UI/link-dropdown/LinkDropdown";

const Navbar = () => {
  const [galleryCategoriesExpanded, setGalleryCategoriesExpanded] =
    useState(false);

  const galleryMouseOverHandler = () => {
    setGalleryCategoriesExpanded(true);
  };

  const galleryMouseOutHandler = () => {
    setGalleryCategoriesExpanded(false);
  };

  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
        <Link to="/">
          <h1 className={styles["logo"]}>Ann-Marie Genne - Foto 🦨</h1>
        </Link>
      </div>
      <div className={styles["links"]}>
        <Link to="/">Om</Link>
        <div
          onMouseOver={galleryMouseOverHandler}
          onMouseOut={galleryMouseOutHandler}
          className={styles["dropdown-container"]}
        >
          <Link to="/gallery">Galleri</Link>
          <div
            className={`${styles["dropdown"]} ${
              !galleryCategoriesExpanded ? styles["dropdown-hidden"] : ""
            }`}
          >
            <CategorySelector
              onMouseOver={galleryMouseOverHandler}
              onMouseOut={galleryMouseOutHandler}
            />
          </div>
        </div>
        <LinkDropdown title="Blogg" path="/blogg" />
        <Link to="/">Kontakt</Link>
      </div>
    </div>
  );
};

export default Navbar;
