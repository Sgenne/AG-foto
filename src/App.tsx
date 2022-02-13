import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./UI/navbar/Navbar";
import FrontPage from "./views/front-page/FrontPage";
import GalleryPage from "./views/gallery/GalleryPage";
import GalleryCategoryPage from "./views/gallery/GalleryCategoryPage";
import BlogPage from "./views/blog/BlogPage";
import AboutMePage from "./views/about-me/AboutMePage";

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
          <Route exact path="/blogg/:year/:month">
            <BlogPage />
          </Route>
          <Route exact path="/om-mig">
            <AboutMePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
