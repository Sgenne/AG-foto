import styles from "./AboutMe.module.css";

const AboutMe = ({ image, text }) => {
  return (
    <div className={styles["about-me-page"]}>
      <div className={styles["about-me-page__image-container"]}>
        <img
          src={image.imageUrl}
          alt={image.alt || ""}
          className={styles["about-me-page__image"]}
        />
      </div>
      <div className={styles["about-me-page__text"]}>{text}</div>
    </div>
  );
};

export default AboutMe;
