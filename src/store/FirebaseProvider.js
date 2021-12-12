import firebase from "firebase";
import "firebase/database";

import FirebaseContext from "./firebase-context";

// Paths from realtime database root.
const SCROLLING_IMAGES_PATH = "scrolling-images";
const GALLERY_IMAGES_PATH = "gallery-images";
const GALLERY_CATEGORIES_PATH = "gallery-categories";
const BLOG_POSTS_PATH = "blog-posts";

firebase.initializeApp({
  apiKey: "AIzaSyAX8L6EW_qA1hHJar-rA4VMX2m8DmhWc98",
  authDomain: "foto-7b483.firebaseapp.com",
  databaseURL:
    "https://foto-7b483-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "foto-7b483",
  storageBucket: "foto-7b483.appspot.com",
  messagingSenderId: "257680495752",
  appId: "1:257680495752:web:673377986d1927e6ecfb3d",
});

const dbRef = firebase.database().ref();

const FirebaseProvider = (props) => {
  const getGalleryCategories = async () => {
    const result = await dbRef.child(GALLERY_CATEGORIES_PATH).get();
    const categories = result.val();

    return Object.values(categories);
  };

  const getGalleryImages = async (category) => {
    try {
      const fetchedImages = await dbRef
        .child(`${GALLERY_IMAGES_PATH}/${category}`)
        .get();

      const imageArray = Object.values(fetchedImages.val());

      return { images: imageArray };
    } catch (err) {
      return { error: err };
    }
  };

  const getAllImages = async () => {
    try {
      const categories = await (
        await dbRef.child(GALLERY_IMAGES_PATH).get()
      ).val();

      let images = [];
      for (const category in categories) {
        images = images.concat(Object.values(categories[category]));
      }

      return { images };
    } catch (err) {
      return { error: err };
    }
  };

  const getScrollingImages = async () => {
    try {
      const images = await dbRef.child(SCROLLING_IMAGES_PATH).get();

      return { images: Object.values(images.val()) };
    } catch (err) {
      return { error: err };
    }
  };

  const getAllBlogPosts = async () => {
    try {
      const posts = await dbRef.child(BLOG_POSTS_PATH).get();
      return { posts: Object.values(posts.val()) };
    } catch (error) {
      return {
        error,
      };
    }
  };

  const firebaseContext = {
    getScrollingImages,
    getGalleryImages,
    getAllImages,
    getGalleryCategories,
    getAllBlogPosts,
  };

  return (
    <FirebaseContext.Provider value={firebaseContext}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
