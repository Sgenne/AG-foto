import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FirebaseContext from "../store/firebase-context";
import Gallery from "../components/gallery/Gallery";
const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState(null);
  const [errorOccured, setErrorOccured] = useState(false);
  const firebaseContext = useContext(FirebaseContext);

  const { category } = useParams();

  console.log("category: " + category);

  useEffect(() => {
    const fetchImages = async () => {
      const { images, error } = category
        ? await firebaseContext.getGalleryImages(category)
        : await firebaseContext.getAllImages();

      if (error) {
        setErrorOccured(true);
      } else {
        setGalleryImages(images);
      }
    };

    fetchImages();
  }, [category, firebaseContext]);

  if (errorOccured) {
    return (
      <p className="error-message">Inga bilder hittades... Försök igen.</p>
    );
  }

  return <Gallery images={galleryImages} />;
};

export default GalleryPage;
