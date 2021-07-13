import { createContext } from "react";

const FirebaseContext = createContext({
    isLoading: false,
    error: null,
    getScrollingImages: () => {},
    getGalleryImages: (category) => {},
    getGalleryCategories: () => {},
})

export default FirebaseContext;