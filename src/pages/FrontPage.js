import { useState, useEffect } from "react";
import FrontPageComponent from "../components/front-page/FrontPage";

import useBackend from "../hooks/use-backend";

const FrontPage = () => {
  const [scrollingImages, setScrollingImages] = useState();
  const [introductionText, setIntroductionText] = useState();
  const { getScrollingImages } = useBackend();

  // load scrolling images from backend
  useEffect(() => {
    getScrollingImages((result) => {
      if (!result.scrollingImages) return;
      const scrollingImages = result.scrollingImages.map((img) => img.image);
      setScrollingImages(scrollingImages);
    });
  }, [getScrollingImages]);

  return (
    <FrontPageComponent
      scrollingImages={scrollingImages}
      introductionText={introductionText}
    />
  );
};

export default FrontPage;
