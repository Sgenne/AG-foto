import { useState, useEffect } from "react";

import styles from "./ImageLinkDropdown.module.css";
import NavigationLink from "../NavigationLink";

const ImageLinkDropdown = ({ topLink, links }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!links) return;
    setCurrentImageUrl(links[0].imageUrl);
  }, [links]);

  const mouseOverContainerHandler = () => {
    setIsHovering(true);
  };

  const mouseOutContainerHandler = () => {
    setIsHovering(false);
  };

  const linkHoverHandler = (link) => {
    setCurrentImageUrl(link.imageUrl);
  };

  if (!links) {
    return <NavigationLink to={topLink.to}>{topLink.text}</NavigationLink>;
  }

  const dropDownLinks = links.map((link) => (
    <li
      onMouseOver={() => linkHoverHandler(link)}
      key={link.text}
    >
      <NavigationLink to={link.to}>{link.text}</NavigationLink>
    </li>
  ));

  const currentImage = currentImageUrl ? (
    <img
      className={styles["dropdown__image"]}
      src={currentImageUrl}
      alt="category"
    />
  ) : (
    <div></div>
  );

  const dropdownClassName = `${styles["dropdown"]} ${
    isHovering ? styles["dropdown--extended"] : ""
  }`;

  return (
    <div
      className={styles["container"]}
      onMouseOver={mouseOverContainerHandler}
      onMouseOut={mouseOutContainerHandler}
    >
      <NavigationLink to={topLink.to}>{topLink.text}</NavigationLink>
      <div className={dropdownClassName}>
        <ul className={styles["dropdown__links"]}>{dropDownLinks}</ul>
        <div className={styles["dropdown__image-container"]}>
          {currentImage}
        </div>
      </div>
    </div>
  );
};

export default ImageLinkDropdown;
