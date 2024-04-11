import "./App.css";

import Header from "./components/header/heder";
import Slides from "./components/slides/slides";
import ImageGallery from "./components/imageGallery/imageGallery";
import ImgText from "./components/imgText/imgText";
import Cardlayout from "./components/cardlayout/cardlayout";
function App() {
  return (
    <div>
      <Header />
      <Slides />
      <ImageGallery />
      <ImgText />
      <Cardlayout />
    </div>
  );
}

export default App;
