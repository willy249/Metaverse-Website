import React, { useState } from "react";
import Logo from "../../assets/logo.png";

// react-icons
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

// components
import DarkMode from "./DarkMode";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Products",
    link: "#",
  },
  {
    id: 3,
    name: "Pricing",
    link: "#",
  },
  {
    id: 4,
    name: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className=" relative z-[9999] text-black dark:text-white duration-200">
      <div className=" container py-2 md:py-0">
        <div className=" flex justify-between items-center">
          {/* logo */}
          <div className=" flex items-center gap-x-3">
            <img src={Logo} alt="" className=" h-16" />
            <p className=" text-3xl">
              VR <span className=" font-bold">World</span>
            </p>
          </div>
          {/* 導覽列 */}
          <div>
            {/* 1_桌面菜單 */}
            <nav className=" hidden md:block">
              <ul className=" flex items-center gap-x-8">
                {NavLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className=" py-4">
                      <a
                        href={link}
                        className=" text-xl font-semibold capitalize hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
                {/* 開關燈 */}
                <DarkMode />
              </ul>
            </nav>

            {/* 2_移動裝置側邊欄菜單 */}
            <div className=" block md:hidden">
              <div className=" flex items-center gap-x-4">
                <DarkMode />
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className=" cursor-pointer"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
