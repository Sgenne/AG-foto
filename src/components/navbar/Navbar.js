import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["links-section"]}>
        <NavLink to="/">Om</NavLink>
        <NavLink to="/galleri">Galleri</NavLink>
        <NavLink to="/">Blogg</NavLink>
        <NavLink to="/">kontakt</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
