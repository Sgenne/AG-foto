import { useEffect, useState } from "react";

import styles from "./Navbar.module.css";
import ImageLinkDropdown from "../UI/navigation/link-dropdown/ImageLinkDropdown";
import useBackend from "../../hooks/use-backend";
import NavigationLink from "../UI/navigation/NavigationLink";

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
        <NavigationLink to="/">
          <h1 className={styles["logo"]}>Ann-Marie Genne - Foto 🦨</h1>
        </NavigationLink>
      </div>
      <div className={styles["links"]}>
        <NavigationLink to="/">Om</NavigationLink>
        <ImageLinkDropdown
          topLink={{ to: "/galleri", text: "Galleri" }}
          links={galleryCategories}
        />
        <NavigationLink to="/blogg">Blogg</NavigationLink>
        <NavigationLink to="/">Kontakt</NavigationLink>
      </div>
    </nav>
  );
};

export default Navbar;
