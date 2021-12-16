import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Gallery from "../components/gallery/Gallery";
import useBackend from "../hooks/use-backend";

const GalleryCategoryPage = () => {
  const [galleryImages, setGalleryImages] = useState(null);
  const { getImagesByCategory, error } = useBackend();

  const { category } = useParams();

  useEffect(() => {
    getImagesByCategory(category, (result) => {
      if (result.images) {
        setGalleryImages(result.images);
      }
    });
  }, [getImagesByCategory, category]);

  if (error) {
    return <p className="error-message">Något gick fel... ¯\_(ツ)_/¯</p>;
  }

  return <Gallery images={galleryImages} />;
};

export default GalleryCategoryPage;
