import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import FrontPage from "./pages/FrontPage";
import GalleryPage from "./pages/GalleryPage";
import GalleryCategoryPage from "./pages/GalleryCategoryPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <FrontPage />
          </Route>
          <Route exact path="/galleri/:category">
            <GalleryCategoryPage />
          </Route>
          <Route exact path="/galleri">
            <GalleryPage />
          </Route>
          <Route exact path="/blogg">
            <BlogPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
