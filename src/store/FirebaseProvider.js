import { useState, useEffect } from "react";

import firebase from "firebase";
// import "firebase/storage";
import "firebase/database";

import FirebaseContext from "./firebase-context";

const SCROLLING_IMAGES_PATH = "scrolling-images"; // Path from realtime database root.

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

const storageRef = firebase.storage().ref();
const dbRef = firebase.database().ref();

const FirebaseProvider = (props) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [galleryCategories, setGalleryCategories] = useState([])

  useEffect(() => {
    // Make separate foldre in db for categories.
  }, [])

  const getScrollingImages = async () => {
    const images = await dbRef.child(SCROLLING_IMAGES_PATH).get();

    return images.map(image => image.val());
  };

  const firebaseContext = {
    isLoading,
    error,
    getScrollingImages,
    getGalleryImages: () => {},
    getGalleryCategories: () => {},
  };

  return (
    <FirebaseContext.Provider value={firebaseContext}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
