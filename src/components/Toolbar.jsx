import { useState } from "react";
import { MdAddAlarm } from "react-icons/md";
import { BiFont } from "react-icons/bi";
import { MdRemoveRedEye } from "react-icons/md";
import { MdBrightness4 } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";

const Toolbar = ({
  changeTheme,
  theme,
  changeFont,
  changleSpellState,
  toggleWordLimitBox,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.documentElement; // Get the root HTML element

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen(); // Firefox
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(); // Chrome, Safari, and Opera
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); // Internet Explorer/Edge
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // Firefox
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Chrome, Safari, and Opera
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // Internet Explorer/Edge
      }
    }

    setIsFullscreen((prev) => !prev);
  };

  const IconWithLabel = ({ label }) => {
    return (
      <div className="hidden absolute bg-gray-800 text-white px-2 py-1 rounded text-xs -bottom-8 transform -translate-x-1/2 group-hover:block">
        {label}
      </div>
    );
  };

  return (
    <div
      className={`flex gap-12 md:gap-16 ${
        theme === "dark"
          ? "text-gray-800 hover:text-gray-500"
          : "text-yellow-300 md:text-yellow-200 md:hover:text-yellow-400"
      } p-5 justify-center md:justify-end items-center md:text-4xl`}
    >
      <div className="relative group">
        <p
          className={`cursor-pointer ${
            theme === "dark" ? "hover:text-white" : "hover:text-black"
          }`}
          onClick={toggleWordLimitBox}
        >
          <MdAddAlarm />
          <IconWithLabel label="Word Limit" />
        </p>
      </div>
      <div className="relative group">
        <p
          className={`cursor-pointer ${
            theme === "dark" ? "hover:text-white" : "hover:text-black"
          }`}
          onClick={changeFont}
        >
          <BiFont />
          <IconWithLabel label="Font" />
        </p>
      </div>
      <div className="relative group">
        <p
          className={`cursor-pointer ${
            theme === "dark" ? "hover:text-white" : "hover:text-black"
          }`}
          onClick={changleSpellState}
        >
          <MdRemoveRedEye />
          <IconWithLabel label="Spellcheck" />
        </p>
      </div>
      <div className="relative group">
        <p
          className={`cursor-pointer ${
            theme === "dark" ? "hover:text-white" : "hover:text-black"
          }`}
          onClick={changeTheme}
        >
          <MdBrightness4 />
          <IconWithLabel label="Theme" />
        </p>
      </div>
      <div className="relative group">
        <p
          className={`cursor-pointer ${
            theme === "dark" ? "hover:text-white" : "hover:text-black"
          }`}
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
          {isFullscreen ? (
            <IconWithLabel label="Exit Fullscreen" />
          ) : (
            <IconWithLabel label="Enter Fullscreen" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Toolbar;
