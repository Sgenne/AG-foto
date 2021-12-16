import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ImageLinkDropdown.module.css";

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
    return <Link to={topLink.to}>{topLink.text}</Link>;
  }

  const dropDownLinks = links.map((link) => (
    <li
      className={styles["dropdown__link"]}
      onMouseOver={() => linkHoverHandler(link)}
      key={link.text}
    >
      <Link to={link.to}>{link.text}</Link>
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
      <Link to={topLink.to}>{topLink.text}</Link>
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
