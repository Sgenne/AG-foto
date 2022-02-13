const HOST = "http://localhost:8080";
const GET_SCROLLING_IMAGES_URL = `${HOST}/gallery/scrolling-images`;
const GET_ALL_GALLERY_IMAGES_URL = `${HOST}/gallery/images`;
const GET_GALLERY_CATEGORIES_URL = `${HOST}/gallery/categories`;
const GET_IMAGES_BY_CATEGORY_URL = `${HOST}/gallery/images/`; // append category
const GET_IMAGE_BY_ID_URL = `${HOST}/gallery/image/`; // append imageId
const GET_BLOG_POSTS_URL = `${HOST}/blog/posts`;
const GET_BLOG_POST_BY_ID_URL = `${HOST}/blog/`; // append id

const sendRequest = async (url: string) => {
  // if requestConfig isn't set then GET request is sent
  const response = await fetch(url);
  const result = await response.json();
  result.status = response.status;

  return result;
};

export const getScrollingImages = async () => {
  return sendRequest(GET_SCROLLING_IMAGES_URL);
};

export const getAllGalleryImages = async () => {
  return sendRequest(GET_ALL_GALLERY_IMAGES_URL);
};

export const getGalleryCategories = () => {
  return sendRequest(GET_GALLERY_CATEGORIES_URL);
};

export const getImagesByCategory = async (category: string) => {
  return sendRequest(GET_IMAGES_BY_CATEGORY_URL + category);
};

export const getImageById = async (imageId: string) => {
  return sendRequest(GET_IMAGE_BY_ID_URL + imageId);
};

export const getBlogPosts = async (requestQueries?: {
  [key: string]: string | number;
}) => {
  let url = GET_BLOG_POSTS_URL;

  // if requestQueries were provided, append them to the url
  if (requestQueries && Object.keys(requestQueries).length > 0) {
    const queries = [];

    for (const parameter of Object.keys(requestQueries)) {
      queries.push(`${parameter}=${requestQueries[parameter]}`);
    }

    const queriesString = "?" + queries.join("&");

    url = url + queriesString;
  }

  return sendRequest(url);
};

export const getBlogPostsByMonth = async (year: number, month: number) => {
  return sendRequest(`${GET_BLOG_POSTS_URL}/${year}/${month}`);
};

export const getBlogPostById = async (id: string) => {
  return sendRequest(GET_BLOG_POST_BY_ID_URL + id);
};
