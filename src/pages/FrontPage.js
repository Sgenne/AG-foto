import { useState, useEffect } from "react";
import ScrollingImages from "../components/front-page/scrolling-images/ScrollingImages";
import FrontPageComponent from "../components/front-page/FrontPage";

import useBackend from "../hooks/use-backend";

const DUMMY_INTRO = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam. Duis at consectetur lorem donec. A iaculis at erat pellentesque adipiscing. Risus commodo viverra maecenas accumsan. Habitant morbi tristique senectus et netus et malesuada fames ac. Vulputate mi sit amet mauris commodo. Pellentesque elit eget gravida cum sociis natoque. A lacus vestibulum sed arcu non. Arcu risus quis varius quam quisque id diam vel quam. Ornare arcu odio ut sem nulla. Faucibus ornare suspendisse sed nisi lacus. Nam at lectus urna duis convallis. Pharetra vel turpis nunc eget lorem. Viverra nam libero justo laoreet. Sit amet porttitor eget dolor morbi non arcu. Tempus urna et pharetra pharetra. Quis enim lobortis scelerisque fermentum dui faucibus in ornare.

Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Risus commodo viverra maecenas accumsan lacus. In mollis nunc sed id semper risus. Sociis natoque penatibus et magnis dis. Ultrices gravida dictum fusce ut placerat. Turpis egestas integer eget aliquet nibh praesent tristique magna. Elementum facilisis leo vel fringilla est ullamcorper. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Diam ut venenatis tellus in metus vulputate. Feugiat pretium nibh ipsum consequat nisl vel. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit.

At tellus at urna condimentum. Porttitor eget dolor morbi non arcu. Eu facilisis sed odio morbi quis commodo. Aliquam faucibus purus in massa tempor nec feugiat nisl. Non tellus orci ac auctor augue. Et odio pellentesque diam volutpat commodo. Leo integer malesuada nunc vel. Amet consectetur adipiscing elit duis tristique. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Donec massa sapien faucibus et molestie. Lacus suspendisse faucibus interdum posuere lorem. Orci a scelerisque purus semper eget duis at. Sit amet aliquam id diam maecenas. Eget duis at tellus at urna condimentum. Tempus quam pellentesque nec nam aliquam.

Nunc sed velit dignissim sodales ut eu sem integer. Pretium fusce id velit ut tortor pretium viverra suspendisse. Morbi tincidunt ornare massa eget egestas. Non odio euismod lacinia at quis risus. Orci porta non pulvinar neque. At tempor commodo ullamcorper a. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Vitae et leo duis ut diam quam. Volutpat odio facilisis mauris sit amet massa vitae. Facilisis mauris sit amet massa vitae tortor. Feugiat in ante metus dictum at tempor commodo.

Sagittis nisl rhoncus mattis rhoncus. Urna nunc id cursus metus. Congue nisi vitae suscipit tellus. Porta lorem mollis aliquam ut. Nisl purus in mollis nunc sed id semper risus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Sem integer vitae justo eget magna. Sed cras ornare arcu dui vivamus arcu felis bibendum. Elementum sagittis vitae et leo duis. Odio aenean sed adipiscing diam donec adipiscing tristique. Sit amet tellus cras adipiscing enim eu. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Mattis enim ut tellus elementum sagittis. In mollis nunc sed id semper. Mauris vitae ultricies leo integer malesuada nunc vel risus. Duis at consectetur lorem donec massa sapien faucibus et. Malesuada fames ac turpis egestas maecenas.`

const FrontPage = () => {
  const [scrollingImages, setScrollingImages] = useState();
  const [introductionText, setIntroductionText] = useState()
  const { getScrollingImages } = useBackend();

  // load scrolling images from backend
  useEffect(() => {
    getScrollingImages((result) => {
      if (!result.scrollingImages) return;
      const scrollingImages = result.scrollingImages.map((img) => img.image);
      setScrollingImages(scrollingImages);
    });
    setIntroductionText(DUMMY_INTRO);
  }, [getScrollingImages]);

  return <FrontPageComponent scrollingImages={scrollingImages} introductionText={introductionText} />;
};

export default FrontPage;
