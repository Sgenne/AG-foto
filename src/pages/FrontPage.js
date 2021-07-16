import { useState, useEffect, useContext } from "react";
import ImageCarousel from "../components/image-carousel/ImageCarousel";

import FirebaseContext from "../store/firebase-context";

const FrontPage = () => {
  const [scrollingImages, setScrollingImages] = useState([]);
  const [errorOccured, setErrorOccured] = useState(false);
  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    const fetchScrollingImages = async () => {
      const { images: scrollingImages, error } =
        await firebaseContext.getScrollingImages();

      if (error) {
        setErrorOccured(true);
      } else {
        setScrollingImages(scrollingImages);
      }
    };
    fetchScrollingImages();
  }, [firebaseContext]);

  if (errorOccured) {
    return <div></div>
  }

  return <ImageCarousel images={scrollingImages} />;
};

export default FrontPage;
