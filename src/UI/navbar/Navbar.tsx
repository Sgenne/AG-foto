import { useEffect, useState } from "react";

import "./Navbar.css";
import ImageLinkDropdown from "../navigation/link-dropdown/ImageLinkDropdown";
import { getGalleryCategories } from "../../utils/backend.util";
import NavigationLink from "../navigation/NavigationLink";
import { ImageCategory } from "../../model/ImageCategory";

const Navbar = () => {
  const [galleryCategories, setGalleryCategories] = useState<
    { imageUrl: string; text: string; to: string }[]
  >([]);

  // load gallery categories to gallery dropdown
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getGalleryCategories();
      const categories = result.categories.map((category: ImageCategory) => ({
        to: `/galleri/${category.title.toLowerCase()}`,
        text: category.title,
        imageUrl: category.previewImage.compressedImageUrl,
      }));
      setGalleryCategories(categories);
    };
    fetchCategories();
  }, [getGalleryCategories]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavigationLink to="/">
          <h1 className="logo">Ann-Marie Genne - Foto 🦨</h1>
        </NavigationLink>
      </div>
      <div className="links">
        <NavigationLink to="/om-mig">Om mig</NavigationLink>
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
