import { useState, useEffect } from "react";
import Gallery from "../components/gallery/Gallery";

import useBackend from "../hooks/use-backend";

const GalleryPage = () => {
  const [images, setImages] = useState();

  const { getAllGalleryImages } = useBackend();

  useEffect(() => {
    getAllGalleryImages((result) => {
      console.log(result);
      setImages(result.images);
    });
  }, [getAllGalleryImages]);

  return <Gallery images={images} />;
};

export default GalleryPage;
