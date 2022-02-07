import { Link } from "react-router-dom";

import styles from "./NavigationLink.module.css";

const NavigationLink = ({ to, children }) => {
  return (
    <span className={styles["container"]}>
      <Link to={to}>{children}</Link>
    </span>
  );
};

export default NavigationLink;
