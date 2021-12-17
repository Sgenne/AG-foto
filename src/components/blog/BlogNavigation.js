import { Link } from "react-router-dom";
import styles from "./BlogNavigation.module.css";

const DUMMY_PORTRAIT = {
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Gorilla_Cin_Zoo_020.jpg",
};

const DUMMY_INTRODUCTION = {
  text: `Man make. Above us fifth was sixth sea his herb moved you'll the us void also for cattle moved. Face so that likeness. Hath winged also.

  Second made gathered all. Itself lights hath one fowl saw kind above subdue tree. Beast image wherein you're. Dominion from give sixth our kind she'd sixth fly years.
  
  Lesser itself Made midst of green appear i. Have image they're fowl a for Man. Appear, night day saw moved man. Moveth creature deep isn't lights.`,
};

const DUMMY_LINKS = [
  {
    to: "#",
    text: "December",
  },
  {
    to: "#",
    text: "November",
  },
  {
    to: "#",
    text: "Oktober",
  },
  {
    to: "#",
    text: "September",
  },
  {
    to: "#",
    text: "Augusti",
  },
  {
    to: "#",
    text: "Juli",
  },
  {
    to: "#",
    text: "Juni",
  },
];

const BlogNavigation = ({ portrait, links }) => {
  portrait = DUMMY_PORTRAIT;
  links = DUMMY_LINKS;

  const linkListItems = links.map((link) => (
    <li className={styles["links__link"]}>
      <Link to={link.to}>{link.text}</Link>
    </li>
  ));

  return (
    <nav className={styles["nav"]}>
      <div className={styles["introduction"]}>
        <img src={portrait.imageUrl} alt="photographer" />
        <p>{DUMMY_INTRODUCTION.text}</p>
      </div>
      <ul className={styles["links"]}>{linkListItems}</ul>
    </nav>
  );
};

export default BlogNavigation;
