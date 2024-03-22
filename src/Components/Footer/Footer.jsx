import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div data-aos="fade" className=" container">
          <div className=" grid md:grid-cols-3 py-3">
            {/* 1_公司細節 */}
            <div className=" py-8 px-4">
              <h1 className=" sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Metaverse
              </h1>
              <p className=" text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores commodi temporibus atque sed ad obcaecati repellat
                dolores optio, nostrum debitis!
              </p>
              <br />

              {/* 聯繫部分 */}
              <div>
                <div className=" flex items-center gap-3">
                  <FaLocationArrow />
                  <p>xxxxx</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+886 123456789</p>
                </div>
              </div>

              {/* 社群部分 */}
              <div className=" flex items-center gap-3 mt-6">
                <a href="#">
                  <FaFacebook className=" text:3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className=" text:3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className=" text:3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>

            {/* 2_相關連結 */}
            <div className=" grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              {/* 2-1 */}
              <div>
                <div className=" py-8 px-4">
                  <h1 className=" text-xl font-bold mb-3">Quick Links</h1>
                  <ul className=" space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className=" hover:translate-x-1 duration-200"
                      >
                        <a
                          href={link.link}
                          className=" cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 2-2 */}
              <div>
                <div className=" py-8 px-4">
                  <h1 className=" text-xl font-bold mb-3">Quick Links</h1>
                  <ul className=" space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className=" hover:translate-x-1 duration-200"
                      >
                        <a
                          href={link.link}
                          className=" cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 2-3 */}
              <div>
                <div className=" py-8 px-4">
                  <h1 className=" text-xl font-bold mb-3">Quick Links</h1>
                  <ul className=" space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className=" hover:translate-x-1 duration-200"
                      >
                        <a
                          href={link.link}
                          className=" cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
