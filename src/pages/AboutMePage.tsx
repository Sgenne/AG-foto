import AboutMe from "../components/about-me/AboutMe";

const DUMMY_IMAGE = {
  compressedImageUrl:
    "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/09/vr-gorilla-gorilla-with-camera.jpg",
  imageUrl:
    "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/09/vr-gorilla-gorilla-with-camera.jpg",
  category: "människor",
  _id: Date.now().toString(),
};

const DUMMY_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Aliquam sem et tortor consequat id. Tincidunt vitae semper quis lectus. Dui accumsan sit amet nulla facilisi morbi tempus. Lectus quam id leo in vitae. Elit duis tristique sollicitudin nibh. Consequat mauris nunc congue nisi vitae suscipit tellus. Lacus vestibulum sed arcu non. Vulputate mi sit amet mauris commodo quis.

  Arcu vitae elementum curabitur vitae nunc sed velit. Tortor dignissim convallis aenean et tortor. Suspendisse interdum consectetur libero id faucibus. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ut diam quam nulla porttitor massa id neque. Tincidunt arcu non sodales neque sodales ut etiam sit. Rhoncus dolor purus non enim praesent. Pharetra vel turpis nunc eget lorem. Ultricies mi quis hendrerit dolor magna eget. A scelerisque purus semper eget. Feugiat pretium nibh ipsum consequat nisl vel pretium. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Cursus turpis massa tincidunt dui ut ornare. Imperdiet dui accumsan sit amet nulla facilisi morbi. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.`;

const AboutMePage = () => {
  return <AboutMe image={DUMMY_IMAGE} text={DUMMY_TEXT} />;
};

export default AboutMePage;
