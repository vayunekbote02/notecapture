import { useEffect, useState } from "react";
import { Toolbar, Editor, Footer } from "./components";

function App() {
  const [theme, setTheme] = useState(true);
  const [data, setData] = useState("");
  const length = countAlphanumericCharacters(data);

  const scrollbarColors = {
    true: {
      thumbColor: "rgb(94, 91, 91)",
      trackColor: "rgb(5, 6, 47)",
      hoverColor: "red",
    },
    false: {
      thumbColor: "rgb(254, 240, 138)",
      trackColor: "rgb(241, 255, 198)",
      hoverColor: "blue",
    },
  };

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData(savedData);
    }
    // const lSTheme = localStorage.getItem("theme");
    /* if (lSTheme) {
      setTheme(lSTheme);
    } */
  }, []);

  useEffect(() => {
    localStorage.setItem("data", data);
  }, [data]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--scrollbar-thumb-color",
      scrollbarColors[theme].thumbColor
    );
    root.style.setProperty(
      "--scrollbar-track-color",
      scrollbarColors[theme].trackColor
    );
    // localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => !prev);
  };

  function countAlphanumericCharacters(str) {
    const alphanumericRegex = /[A-Za-z0-9]/g;
    const matches = str.match(alphanumericRegex);
    return matches ? matches.length : 0;
  }

  return (
    <div
      className={`h-screen ${
        theme ? "bg-[#05062f]" : "bg-[#f1ffc6]"
      } flex flex-col`}
    >
      <Toolbar changeTheme={changeTheme} theme={theme} />
      <Editor data={data} setData={setData} theme={theme} />
      <Footer length={length} theme={theme} />
    </div>
  );
}

export default App;
