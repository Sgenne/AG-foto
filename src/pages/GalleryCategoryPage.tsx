import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Gallery from "../components/gallery/Gallery";
import useBackend from "../hooks/use-backend";
import { Image } from "../model/image.interface";

const GalleryCategoryPage = () => {
  const [galleryImages, setGalleryImages] = useState<Image[]>([]);
  const { getImagesByCategory, error } = useBackend();

  const { category } = useParams<{ category: string }>();
  useEffect(() => {
    const fetchImages = async () => {
      const result = await getImagesByCategory(category);
      if (result.images) {
        setGalleryImages(result.images);
      }
    };
    fetchImages();
  }, [getImagesByCategory, category]);

  if (error) {
    return <p className="error-message">Något gick fel... ¯\_(ツ)_/¯</p>;
  }

  return <Gallery images={galleryImages} />;
};

export default GalleryCategoryPage;
