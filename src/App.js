import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/navbar/Header";
import FrontPage from "./pages/FrontPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <FrontPage />
          </Route>
          <Route exact path="/gallery/:category">
            <GalleryPage />
          </Route>
          <Route exact path="/gallery">
            <GalleryPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
