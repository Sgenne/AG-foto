import { useState, useEffect } from "react";
import Gallery from "../components/gallery/Gallery";

import useBackend from "../hooks/use-backend";
import { Image } from "../model/image.interface";

const GalleryPage = () => {
  const [images, setImages] = useState<Image[]>([]);

  const { getAllGalleryImages } = useBackend();

  useEffect(() => {
    const fetchImages = async () => {
      const result = await getAllGalleryImages();
      setImages(result.images);
    };
    fetchImages();
  }, [getAllGalleryImages]);

  return <Gallery images={images} />;
};

export default GalleryPage;
