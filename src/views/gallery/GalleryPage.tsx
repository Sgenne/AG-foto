import { useState, useEffect } from "react";
import Gallery from "./Gallery";

import { Image } from "../../model/image.interface";
import { getAllGalleryImages } from "../../utils/backend.util";

const GalleryPage = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const result = await getAllGalleryImages();
      setImages(result.images);
    };
    fetchImages();
  }, []);

  return <Gallery images={images} />;
};

export default GalleryPage;
