import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { Image } from "../../model/image.interface";
import "./Gallery.module.css";
import ImageModal from "./ImageModal";

interface GalleryProps {
  images: Image[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [galleryImages, setGalleryImages] = useState<Image[]>([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
  const [numberOfLoadedImages, setNumberOfLoadedImages] = useState(0);

  const imageClickedHandler = (index: number) => {
    setDisplayedImageIndex(index);
    setShowImageModal(true);
  };

  const closeModalHandler = () => {
    setShowImageModal(false);
  };

  const forwardPressedHandler = () => {
    setDisplayedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const backPressedHandler = () => {
    setDisplayedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const imageIsLoadedHandler = () => {
    setNumberOfLoadedImages((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    if (!images) return;

    const mappedImages = images.map((image, index) => (
      <img
        key={image._id}
        src={image.compressedImageUrl}
        alt={image.category}
        onClick={() => imageClickedHandler(index)}
        onLoad={imageIsLoadedHandler}
      />
    ));
    setGalleryImages(mappedImages);
    setDisplayedImageIndex(0);
    setNumberOfLoadedImages(0);
  }, [images]);

  const hideImages = !images || numberOfLoadedImages < images.length;

  return (
    <>
      <div className={`${hideImages ? "loading-spinner-container" : "hidden"}`}>
        <Loader type="TailSpin" color="#000000" height={100} width={100} />
      </div>
      <div className={`${hideImages ? "hidden" : ""}`}>
        {showImageModal && (
          <ImageModal
            onBackPressed={backPressedHandler}
            onForwardPressed={forwardPressedHandler}
            onClose={closeModalHandler}
            image={images[displayedImageIndex]}
          />
        )}
        <div className="image-container">{galleryImages}</div>
      </div>
    </>
  );
};

export default Gallery;
