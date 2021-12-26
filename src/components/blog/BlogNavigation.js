import NavigationLink from "../UI/navigation/NavigationLink";
import styles from "./BlogNavigation.module.css";

const DUMMY_INTRODUCTION = {
  text: `Man make. Above us fifth was sixth sea his herb moved you'll the us void also for cattle moved. Face so that likeness. Hath winged also.

  Second made gathered all. Itself lights hath one fowl saw kind above subdue tree. Beast image wherein you're. Dominion from give sixth our kind she'd sixth fly years.
  
  Lesser itself Made midst of green appear i. Have image they're fowl a for Man. Appear, night day saw moved man. Moveth creature deep isn't lights.`,
};

const BlogNavigation = ({ portrait, links }) => {
  const linkListItems = links
    ? links.map((link) => (
        <li key={link.text}>
          <NavigationLink to={link.to}>{link.text}</NavigationLink>
        </li>
      ))
    : [];

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
