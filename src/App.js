import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/storage";

// import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/navbar/Header";
import ImageCarousel from "./components/image-carousel/ImageCarousel";
import Gallery from "./components/gallery/Gallery";
// import Modal from "./components/UI/Modal";

import img1 from "./dummyImages/rollingImages/benches.jpg";
import img2 from "./dummyImages/rollingImages/canoes.jpg";
import img3 from "./dummyImages/rollingImages/fishing.jpg";
import img4 from "./dummyImages/rollingImages/hills.jpg";
import img5 from "./dummyImages/forrest.jpg";
import img6 from "./dummyImages/highway.jpg";
import img7 from "./dummyImages/lake.jpg";
import img8 from "./dummyImages/roadInForrest.jpg";
import img9 from "./dummyImages/rock.jpg";
import img10 from "./dummyImages/ship.jpg";
import img11 from "./dummyImages/squares.jpeg";

const IMAGES = [
  {
    id: "1",
    src: img1,
  },
  {
    id: "2",
    src: img2,
  },
  {
    id: "3",
    src: img3,
  },
  {
    id: "4",
    src: img4,
  },
  {
    id: "5",
    src: img5,
  },
  {
    id: "6",
    src: img6,
  },
  {
    id: "7",
    src: img7,
  },
  {
    id: "8",
    src: img8,
  },
  {
    id: "9",
    src: img9,
  },
  {
    id: "10",
    src: img10,
  },
  {
    id: "11",
    src: img11,
  },
];


firebase.initializeApp({
  apiKey: "AIzaSyAX8L6EW_qA1hHJar-rA4VMX2m8DmhWc98",
  authDomain: "foto-7b483.firebaseapp.com",
  projectId: "foto-7b483",
  storageBucket: "foto-7b483.appspot.com",
  messagingSenderId: "257680495752",
  appId: "1:257680495752:web:673377986d1927e6ecfb3d",
});

const storage = firebase.storage();
const storageRef = storage.ref();

function App() {

useEffect(() => {
  const imagesRef = storageRef.child("images");
  console.log(imagesRef);
}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <ImageCarousel images={IMAGES} />
          </Route>
          <Route path="/galleri">
            <Gallery images={IMAGES} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
