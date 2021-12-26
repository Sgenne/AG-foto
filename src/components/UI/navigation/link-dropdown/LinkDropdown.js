import { useState } from "react";
import NavigationLink from "../NavigationLink";

import styles from "./LinkDropdown.module.css";

const DUMMY_LINKS = [
  {
    path: "#",
    title: "Arkiv",
  },
  {
    path: "#",
    title: "Kategorier",
  },
];

const LinkDropdown = ({ title, path }) => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseOverHandler = () => {
    setIsHovering(true);
  };

  const mouseOutHandler = () => {
    setIsHovering(false);
  };

  const dropdownLinks = DUMMY_LINKS.map((link) => (
    <li className={styles["dropdown__link"]} key={link.title}>
      <NavigationLink to={link.path}>{link.title}</NavigationLink>
    </li>
  ));

  return (
    <div
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      className={styles["container"]}
    >
      <NavigationLink to={path}>{title}</NavigationLink>
      <div
        className={`${styles["dropdown"]} ${
          !isHovering ? styles["dropdown--hidden"] : ""
        }`}
      >
        <ul>{dropdownLinks}</ul>
      </div>
    </div>
  );
};

export default LinkDropdown;
