import { Image } from "../../model/image.interface";
import "./styles/AboutMe.css";

interface AboutMeProps {
  image: Image;
  text: string;
}

const AboutMe = ({ image, text }: AboutMeProps) => {
  return (
    <div className="about-me-page">
      <div className="about-me-page__image-container">
        <img
          src={image.imageUrl}
          alt={image.alt || ""}
          className="about-me-page__image"
        />
      </div>
      <div className="about-me-page__text">{text}</div>
    </div>
  );
};

export default AboutMe;
