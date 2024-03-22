import React, { useEffect, useState } from "react";

// react-icons
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement; // HTML 文件中的根元素 <html>

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark"); // 將 dark 類名添加到這個根元素上
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          className=" text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiSolidMoon
          className=" text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
