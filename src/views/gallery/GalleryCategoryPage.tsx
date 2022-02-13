import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Gallery from "./Gallery";
import { getImagesByCategory } from "../../utils/backend.util";
import { Image } from "../../model/image.interface";

const GalleryCategoryPage = () => {
  const [galleryImages, setGalleryImages] = useState<Image[]>([]);

  const { category } = useParams<{ category: string }>();
  useEffect(() => {
    const fetchImages = async () => {
      const result = await getImagesByCategory(category);
      if (result.images) {
        setGalleryImages(result.images);
      }
    };
    fetchImages();
  }, [category]);

  return <Gallery images={galleryImages} />;
};

export default GalleryCategoryPage;
