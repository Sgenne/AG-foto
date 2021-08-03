import { Link } from "react-router-dom";

import styles from "LinkDropdown.module.css";

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

const LinkDropdown = () => {
  
  // const dropdownLinks = DUMMY_LINKS.map()
  
  return (
    <div className={styles["container"]}>
      <Link></Link>
      <div className={"dropdown"}></div>
    </div>
  );
};

export default LinkDropdown;
