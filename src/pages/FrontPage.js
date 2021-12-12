import { useState, useEffect } from "react";
import ImageCarousel from "../components/image-carousel/ImageCarousel";

import useBackend from "../hooks/use-backend";

const FrontPage = () => {
  const [scrollingImages, setScrollingImages] = useState();
  const { getScrollingImages } = useBackend();

  // load scrolling images from backend
  useEffect(() => {
    getScrollingImages((result) => {
      if (!result.scrollingImages) return;
      const scrollingImages = result.scrollingImages.map((img) => img.image);
      setScrollingImages(scrollingImages);
    });
  }, [getScrollingImages]);

  return <ImageCarousel images={scrollingImages} />;
};

export default FrontPage;
