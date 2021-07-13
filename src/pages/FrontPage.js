import { useState, useEffect, useContext } from "react"
import ImageCarousel from "../components/image-carousel/ImageCarousel"

import FirebaseContext from "../store/firebase-context"

const FrontPage = () => {
  const [scrollingImages, setScrollingImages] = useState([])
  
  const firebaseContext = useContext(FirebaseContext)

  useEffect(() => {
    const fetchScrollingImages = async () => {
      const scrollingImages = await firebaseContext.getScrollingImages(); // Why does await not have an effect?? Try without.
      setScrollingImages(scrollingImages);
    };
    fetchScrollingImages();
  }, [firebaseContext])

  return <ImageCarousel images={scrollingImages} />
}

export default FrontPage
