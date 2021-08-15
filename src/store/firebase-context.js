import { createContext } from "react";

const FirebaseContext = createContext({
    getScrollingImages: () => {},
    getGalleryImages: (category) => {},
    getAllImages: () => {},
    getGalleryCategories: () => {},
    getAllBlogPosts: () => {},
})

export default FirebaseContext;