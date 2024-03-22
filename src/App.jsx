import { useEffect, useState } from "react";
// components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Quotes from "./Components/Quotes/Quotes";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Features from "./Components/Features/Features";
import AppStore from "./Components/AppStore/AppStore";
import Footer from "./Components/Footer/Footer";
import PopupPlayer from "./Components/PopupPlayer/PopupPlayer";

import AOS from "aos";
import "aos/dist/aos.css"; // 引入 AOS 的 CSS 文件

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-200">
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <AppStore />
      <Footer />

      {/* 視頻撥放 */}
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
    </div>
  );
};

export default App;
