import styles from "./ImageModal.module.css";

import Modal from "../UI/Modal";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <img
        className={styles["image"]}
        src={image["download-url"]}
        alt={image.title}
      />
    </Modal>
  );
};

export default ImageModal;
