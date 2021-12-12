import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FirebaseContext from "../store/firebase-context";
import Gallery from "../components/gallery/Gallery";
import useBackend from "../hooks/use-backend";

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState(null);
  const [errorOccured, setErrorOccured] = useState(false);
  const firebaseContext = useContext(FirebaseContext);
  const { getImagesByCategory, error } = useBackend();

  const { category } = useParams();

  useEffect(() => {
    getImagesByCategory(category, (result) => {
      const images = result.images.map((img) => img);
      console.log("category: ", category);
      console.log("images: ", images);

      if (images) {
        setGalleryImages(images);
      }
    });
  }, [getImagesByCategory, category]);

  if (error) {
    return (
      <p className="error-message">Något gick fel... ¯\_(ツ)_/¯</p>
    );
  }

  return <Gallery images={galleryImages} />;
};

export default GalleryPage;
