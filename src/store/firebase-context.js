import { createContext } from "react";

const firebaseContext = createContext({
    isLoading: false,
    error: null,
    result: null,
    getScrollingImages: () => {},
    getGalleryImages: (category) => {},
    getGalleryCategories: () => {},
})

export default firebaseContext;