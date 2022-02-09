import { useState, useEffect } from "react";

import "./ImageLinkDropdown.css";
import NavigationLink from "../NavigationLink";
import { Link } from "../../../../model/link.interface";

interface ImageLink extends Link {
  imageUrl: string;
}

interface ImageLinkDropdownProps {
  topLink: Link;
  links: ImageLink[];
}

const ImageLinkDropdown = ({ topLink, links }: ImageLinkDropdownProps) => {
  const [currentImageUrl, setCurrentImageUrl] = useState<string>();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!links || links.length === 0) return;
    setCurrentImageUrl(links[0].imageUrl);
  }, [links]);

  const mouseOverContainerHandler = () => {
    setIsHovering(true);
  };

  const mouseOutContainerHandler = () => {
    setIsHovering(false);
  };

  const linkHoverHandler = (link: ImageLink) => {
    setCurrentImageUrl(link.imageUrl);
  };

  if (!links) {
    return <NavigationLink to={topLink.to}>{topLink.text}</NavigationLink>;
  }

  const dropDownLinks = links.map((link) => (
    <li onMouseOver={() => linkHoverHandler(link)} key={link.text}>
      <NavigationLink to={link.to}>{link.text}</NavigationLink>
    </li>
  ));

  const currentImage = currentImageUrl ? (
    <img className="dropdown__image" src={currentImageUrl} alt="category" />
  ) : (
    <div></div>
  );

  const dropdownClassName = `dropdown ${
    isHovering ? "dropdown--extended" : ""
  }`;

  return (
    <div
      className="container"
      onMouseOver={mouseOverContainerHandler}
      onMouseOut={mouseOutContainerHandler}
    >
      <NavigationLink to={topLink.to}>{topLink.text}</NavigationLink>
      <div className={dropdownClassName}>
        <ul className="dropdown__links">{dropDownLinks}</ul>
        <div className="dropdown__image-container">{currentImage}</div>
      </div>
    </div>
  );
};

export default ImageLinkDropdown;
