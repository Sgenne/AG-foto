import { useState, useEffect } from "react";
import FrontPageComponent from "./Front";

import { Image } from "../../model/image.interface";
import { getScrollingImages } from "../../utils/backend.util";

const FrontPage = () => {
  const [scrollingImages, setScrollingImages] = useState<Image[]>([]);

  // load scrolling images from backend
  useEffect(() => {
    const fetchScrollingImages = async () => {
      const result = await getScrollingImages();
      console.log(result);
      if (!result.scrollingImages) return;
      const scrollingImages = result.scrollingImages.map(
        (img: { image: Image }) => img.image
      );
      setScrollingImages(scrollingImages);
    };
    fetchScrollingImages();
  }, []);

  return (
    <FrontPageComponent
      scrollingImages={scrollingImages}
      introductionText="Introcution text"
    />
  );
};

export default FrontPage;
