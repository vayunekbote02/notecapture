import { useState } from "react";
import { MdAddAlarm } from "react-icons/md";
import { MdSpellcheck } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { MdBrightness4 } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";

const Toolbar = ({ changeTheme, theme }) => {
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

  return (
    <div
      className={`flex gap-12 md:gap-16 ${
        theme
          ? "text-gray-800 hover:text-gray-500"
          : "text-yellow-300 md:text-yellow-200 md:hover:text-yellow-400"
      } p-5 justify-center md:justify-end items-center md:text-4xl`}
    >
      <p
        className={`cursor-pointer ${
          theme ? "hover:text-white" : "hover:text-black"
        }`}
      >
        <MdAddAlarm />
      </p>
      <p
        className={`cursor-pointer ${
          theme ? "hover:text-white" : "hover:text-black"
        }`}
      >
        <MdSpellcheck />
      </p>
      <p
        className={`cursor-pointer ${
          theme ? "hover:text-white" : "hover:text-black"
        }`}
      >
        <MdRemoveRedEye />
      </p>
      <p
        className={`cursor-pointer ${
          theme ? "hover:text-white" : "hover:text-black"
        }`}
        onClick={changeTheme}
      >
        <MdBrightness4 />
      </p>
      <p
        className={`cursor-pointer ${
          theme ? "hover:text-white" : "hover:text-black"
        }`}
        onClick={toggleFullscreen}
      >
        {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
      </p>
    </div>
  );
};

export default Toolbar;
