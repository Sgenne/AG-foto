import { useEffect, useState } from "react";

import "./Navbar.css";
import ImageLinkDropdown from "../UI/navigation/link-dropdown/ImageLinkDropdown";
import useBackend from "../../hooks/use-backend";
import NavigationLink from "../UI/navigation/NavigationLink";
import { ImageCategory } from "../../model/ImageCategory";
import { Image } from "../../model/image.interface";

const Navbar = () => {
  const [galleryCategories, setGalleryCategories] = useState<
    { imageUrl: string; text: string; to: string }[]
  >([]);

  const { getGalleryCategories } = useBackend();

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
