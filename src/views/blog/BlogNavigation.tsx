import { Image } from "../../model/image.interface";
import { Link } from "../../model/link.interface";
import NavigationLink from "../../UI/navigation/NavigationLink";
import "./styles/BlogNavigation.css";

const DUMMY_INTRODUCTION = {
  text: `Man make. Above us fifth was sixth sea his herb moved you'll the us void also for cattle moved. Face so that likeness. Hath winged also.

  Second made gathered all. Itself lights hath one fowl saw kind above subdue tree. Beast image wherein you're. Dominion from give sixth our kind she'd sixth fly years.
  
  Lesser itself Made midst of green appear i. Have image they're fowl a for Man. Appear, night day saw moved man. Moveth creature deep isn't lights.`,
};

interface BlogNavigationProps {
  portrait: Image;
  links: Link[];
}

const BlogNavigation = ({ portrait, links }: BlogNavigationProps) => {
  const linkListItems = links
    ? links.map((link) => (
        <li key={link.text}>
          <NavigationLink to={link.to}>{link.text}</NavigationLink>
        </li>
      ))
    : [];

  return (
    <nav className="nav">
      <div className="introduction">
        <img src={portrait.imageUrl} alt={portrait.alt} />
        <p>{DUMMY_INTRODUCTION.text}</p>
      </div>
      <ul className="links">{linkListItems}</ul>
    </nav>
  );
};

export default BlogNavigation;
