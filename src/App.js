  // import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/database";

// import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/navbar/Header";
import Gallery from "./components/gallery/Gallery";
import FrontPage from "./pages/FrontPage";
// import Modal from "./components/UI/Modal";

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
    src: "https://storage.googleapis.com/foto-7b483.appspot.com/images/Arkitektur/rock.jpg",
  },
  {
    id: "2",
    src: "https://storage.googleapis.com/foto-7b483.appspot.com/images/Landskap/forrest.jpg",
  },
  {
    id: "3",
    src: "https://storage.googleapis.com/foto-7b483.appspot.com/images/Landskap/highway.jpg",
  },
  {
    id: "4",
    src: "https://storage.googleapis.com/foto-7b483.appspot.com/images/Landskap/fishing.jpg",
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

function App() {
  // const [scrollingImages, setScrollingImages] = useState([]);

  // const firebaseContext = useContext(FirebaseContext);

  // useEffect(() => {
  //   let tmpScrollingImages = [];
  //   dbRef
  //     .child("scrolling-images")
  //     .get()
  //     .then((dbImages) => {
  //       dbImages.forEach((item) => {
  //         const { "download-url": src, description, id } = item.val();

  //         console.log(item.val());

  //         const image = {
  //           id,
  //           src,
  //           description,
  //         };
  //         tmpScrollingImages.push(image);
  //       });
  //       setScrollingImages(tmpScrollingImages);
  //       console.log("download done")
  //       console.log(tmpScrollingImages)
  //     });
  // }, []);

  // useEffect(() => {
  //   firebaseContext.getScrollingImages().then(res => console.log(res));

  //   // Create local async function that calls firebase and sets scrollingImages
  // }, [firebaseContext])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <FrontPage />
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
