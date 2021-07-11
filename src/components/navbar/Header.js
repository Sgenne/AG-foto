import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <NavLink className={styles["logo-link"]} to="/">
        <h1 className={styles["logo"]}>Ann-Marie Genne - Foto 🦨</h1>
      </NavLink>
    </div>
  );
};

export default Header;
