import { createContext } from "react";

const FirebaseContext = createContext({
    getScrollingImages: () => Promise,
    getGalleryImages: (category) => Promise,
    getAllImages: () => Promise,
    getGalleryCategories: () => Promise,
})

export default FirebaseContext;