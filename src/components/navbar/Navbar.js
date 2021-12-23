import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import ImageLinkDropdown from "../UI/link-dropdown/ImageLinkDropdown";
import useBackend from "../../hooks/use-backend";

const Navbar = () => {
  const [galleryCategories, setGalleryCategories] = useState();

  const { getGalleryCategories } = useBackend();

  // load gallery categories to gallery dropdown
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getGalleryCategories();
      const categories = result.categories.map((category) => ({
        to: `/galleri/${category.title.toLowerCase()}`,
        text: category.title,
        imageUrl: category.previewImage.compressedImageUrl,
      }));
      setGalleryCategories(categories);
    };
    fetchCategories();
  }, [getGalleryCategories]);

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
        <Link to="/">
          <h1 className={styles["logo"]}>Ann-Marie Genne - Foto 🦨</h1>
        </Link>
      </div>
      <div className={styles["links"]}>
        <Link to="/">Om</Link>
        <ImageLinkDropdown
          topLink={{ to: "/galleri", text: "Galleri" }}
          links={galleryCategories}
        />
        <Link to="/blogg">Blogg</Link>
        <Link to="/">Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
