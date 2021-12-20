import { useState, useCallback } from "react";

const HOST = "http://localhost:8080";
const GET_SCROLLING_IMAGES_URL = `${HOST}/gallery/scrolling-images`;
const GET_ALL_GALLERY_IMAGES_URL = `${HOST}/gallery/images`;
const GET_GALLERY_CATEGORIES_URL = `${HOST}/gallery/categories`;
const GET_IMAGES_BY_CATEGORY_URL = `${HOST}/gallery/images/`; // append category
const GET_ALL_BLOG_POSTS_URL = `${HOST}/blog/posts`;
const GET_BLOG_CATEGORIES_URL = `${HOST}/blog/categories`;
const GET_BLOG_POSTS_BY_CATEGORY_URL = `${HOST}/blog/category/`; // append category
const GET_BLOG_POST_BY_ID_URL = `${HOST}/blog/post/`; // append id

const useBackend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const _sendRequest = useCallback(async (url, errorMessage) => {
    setIsLoading(true);
    setError(null);

    let result;

    try {
      const response = await fetch(url);
      result = JSON.parse(await response.json());
    } catch (err) {
      setError(errorMessage);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    return result;
  }, []);

  const getScrollingImages = useCallback(async () => {
    return _sendRequest(GET_SCROLLING_IMAGES_URL, "Kunde inte hämta bilder.");
  }, [_sendRequest]);

  const getAllGalleryImages = useCallback(async () => {
    return _sendRequest(GET_ALL_GALLERY_IMAGES_URL, "Kunde inte hämta bilder.");
  }, [_sendRequest]);

  const getGalleryCategories = useCallback(() => {
    return _sendRequest(
      GET_GALLERY_CATEGORIES_URL,

      "Kunde inte hämta kategorier."
    );
  }, [_sendRequest]);

  const getImagesByCategory = useCallback(
    async (category) => {
      return _sendRequest(
        GET_IMAGES_BY_CATEGORY_URL + category,

        "Kunde inte hämta bilder."
      );
    },
    [_sendRequest]
  );

  const getBlogCategories = useCallback(async () => {
    return _sendRequest(
      GET_BLOG_CATEGORIES_URL,

      "Kunde inte hämta kategorier."
    );
  }, [_sendRequest]);

  const getAllBlogPosts = useCallback(async () => {
    return _sendRequest(
      GET_ALL_BLOG_POSTS_URL,

      "Kunde inte hämta blogginlägg."
    );
  }, [_sendRequest]);

  const getBlogPostsByCategory = useCallback(
    async (category) => {
      return _sendRequest(
        GET_BLOG_POSTS_BY_CATEGORY_URL + category,

        "Kunde inte hämta blogginlägg."
      );
    },
    [_sendRequest]
  );

  const getBlogPostById = useCallback(
    async (id) => {
      return _sendRequest(
        GET_BLOG_POST_BY_ID_URL + id,

        "Kunde inte hämta blogginlägg."
      );
    },
    [_sendRequest]
  );

  return {
    getScrollingImages,
    getAllGalleryImages,
    getGalleryCategories,
    getImagesByCategory,
    getBlogCategories,
    getAllBlogPosts,
    getBlogPostsByCategory,
    getBlogPostById,
    isLoading,
    error,
  };
};

export default useBackend;
