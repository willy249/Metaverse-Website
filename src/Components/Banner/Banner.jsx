import BannerPng from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";
import PropType from "prop-types";

const Banner = ({ togglePlay }) => {
  return (
    <div className=" py-12 sm:py-0 relative overflow-hidden">
      <div className=" container min-h-[620px] flex items-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* 圖片 */}
          <div data-aos="fade-up">
            <img
              src={BannerPng}
              alt=""
              className=" relative w-full max-w-[400px]"
            />
          </div>
          {/* 描述 */}
          <div className=" before:lg:pr-20 relative">
            <div className=" relative z-10 space-y-5 ">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className=" text-4xl font-semibold"
              >
                GET READV TO ENJOY VR{" "}
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {" "}
                  MOVIES WITH OUR PLATFORM{" "}
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates assumenda libero alias ea? Soluta tempore placeat
                quidem eveniet nobis sint!
              </p>
              <div className=" flex gap-x-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
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
            {/* 背景球 */}
            <div className=" h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// propTypes 驗證
Banner.propTypes = {
  togglePlay: PropType.func.isRequired,
};

export default Banner;
