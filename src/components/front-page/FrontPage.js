import { useState } from "react";
import Loader from "react-loader-spinner";

import ScrollingImages from "./scrolling-images/ScrollingImages";
import styles from "./FrontPage.module.css";

const FrontPage = ({ scrollingImages, introductionText }) => {
  const [scrollingImagesAreLoaded, setScrollingImagesAreLoaded] =
    useState(false);

  const scrollingImagesLoadedHandler = () => {
    console.log("scrolling images are loaded!!!");
    setScrollingImagesAreLoaded(true);
  };

  const scrollingImagesClassName = `${styles["front-page__scrolling-images"]} ${
    scrollingImagesAreLoaded ? "" : styles["hidden"]
  }`;

  const loaderClassName = scrollingImagesAreLoaded
    ? styles["hidden"]
    : styles["loading-animation-container"];

  return (
    <div className={styles["front-page"]}>
      <div className={loaderClassName}>
        <Loader type="TailSpin" color="#e1e1e1" height={100} width={100} />
      </div>
      <div className={scrollingImagesClassName}>
        <ScrollingImages
          images={scrollingImages}
          onLoad={scrollingImagesLoadedHandler}
        />
      </div>
      <div className={styles["front-page__introduction"]}>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now. When, while the lovely valley teems with vapour
          around me, and the meridian sun strikes the upper surface of the
          impenetrable foliage of my trees, and but a few stray gleams steal
          into the inner sanctuary, I throw myself down among the tall grass by
          the trickling stream; and, as I lie close to the earth, a thousand
          unknown plants are noticed by me: when I hear the buzz of the little
          world among the stalks, and grow familiar with the countless
          indescribable forms of the insects and flies, then I feel the presence
          of the Almighty, who formed us in his own image, and the breath
        </p>

        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now. When, while the lovely valley teems with vapour
          around me, and the meridian sun strikes the upper surface of the
          impenetrable foliage of my trees, and but a few stray gleams steal
          into the inner sanctuary, I throw myself down among the tall grass by
          the trickling stream; and, as I lie close to the earth, a thousand
          unknown plants are noticed by me: when I hear the buzz of the little
          world among the stalks, and grow familiar with the countless
          indescribable forms of the insects and flies, then I feel the presence
          of the Almighty, who formed us in his own image, and the breath
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
