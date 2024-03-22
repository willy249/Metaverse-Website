import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";
import PropTypes from "prop-types";

const Hero = ({ togglePlay }) => {
  return (
    <>
      <div className=" py-12 sm:py-0 dark:bg-black dark:text-white duration-200 overflow-hidden">
        <div className=" container min-h-[700px] flex relative">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* 描述 */}
            <div className=" order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" className=" text-4xl font-semibold">
                GET READV TO ENJOY VR{" "}
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {" "}
                  GAMES WITH OUR PLATFORM{" "}
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates assumenda libero alias ea? Soluta tempore placeat
                quidem eveniet nobis sint!
              </p>
              <div className=" flex gap-x-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className=" flex items-center gap-x-2"
                >
                  <BiPlayCircle className=" text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* 圖片 */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className=" order-1 sm:order-2"
            >
              <img src={HeroPng} alt="" className="" />
            </div>
          </div>
          {/* 動畫效果 */}
          <div className=" h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

// PropTypes 驗證
Hero.propTypes = {
  togglePlay: PropTypes.func.isRequired,
};

export default Hero;
