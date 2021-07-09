import { useState } from "react";
import styles from "./DropDownNavButton.module.css";

const DropDownNavButton = (props) => {
  const [dropdownExpanded, setDropdownExpanded] = useState(false)

  const mouseEnterHandler = () => {
    setDropdownExpanded(true);
  }

  const mouseLeaveHandler = () => {
    setDropdownExpanded(false);
  }

  return (
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={styles["drop-down-button-container"]}>
      <button type="button">
        {props.title}
      </button>
      <div className={`${styles["dropdown"]} ${!dropdownExpanded ? styles["dropdown-hidden"] : ""}`}>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
      </div>
    </div>
  )
}

export default DropDownNavButton
