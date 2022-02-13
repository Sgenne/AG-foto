import { useState } from "react";
import NavigationLink from "../NavigationLink";

import "./LinkDropdown.css";

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

interface LinkDropdownProps {
  title: string;
  path: string;
}

const LinkDropdown = ({ title, path }: LinkDropdownProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseOverHandler = () => {
    setIsHovering(true);
  };

  const mouseOutHandler = () => {
    setIsHovering(false);
  };

  const dropdownLinks = DUMMY_LINKS.map((link) => (
    <li className="dropdown__link" key={link.title}>
      <NavigationLink to={link.path}>{link.title}</NavigationLink>
    </li>
  ));

  return (
    <div
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      className="container"
    >
      <NavigationLink to={path}>{title}</NavigationLink>
      <div className={`dropdown ${!isHovering ? "dropdown--hidden" : ""}`}>
        <ul>{dropdownLinks}</ul>
      </div>
    </div>
  );
};

export default LinkDropdown;
