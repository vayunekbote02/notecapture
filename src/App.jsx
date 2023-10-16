import { useEffect, useState } from "react";
import { Toolbar, Editor, Footer, WordLimit } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const initialTheme = localStorage.getItem("nc-theme") || "dark";
  const [theme, setTheme] = useState(initialTheme);
  const initialData = localStorage.getItem("nc-data-tre") || "";
  const [data, setData] = useState(initialData);
  const initialFont = localStorage.getItem("nc-font") || "normal";
  const [font, setFont] = useState(initialFont);
  const length = countAlphanumericCharacters(data);
  const wordsLength = countWords(data);
  const spellCheckState = localStorage.getItem("nc-spellState") || true;
  const [spellCheck, setSpellCheck] = useState(spellCheckState);
  const [showWordLimitBox, setShowWordLimitBox] = useState(false);
  const [wordLimitCount, setWordLimitCount] = useState(0);

  const scrollbarColors = {
    dark: {
      thumbColor: "rgb(94, 91, 91)",
      trackColor: "rgb(5, 6, 47)",
      hoverColor: "red",
    },
    light: {
      thumbColor: "rgb(254, 240, 138)",
      trackColor: "rgb(241, 255, 198)",
      hoverColor: "blue",
    },
  };

  useEffect(() => {
    localStorage.setItem("nc-data-tre", data);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("nc-font", font);
  }, [font]);

  useEffect(() => {
    localStorage.setItem("nc-spellState", spellCheck);
  }, [spellCheck]);

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
    localStorage.setItem("nc-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (wordLimitCount !== 0 && wordLimitCount === countWords(data))
      toast.success("Congratulations 👏 You have reached your word limit!");
  }, [countWords(data)]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeFont = () => {
    setFont(font === "normal" ? "code" : "normal");
  };

  const changleSpellState = () => {
    setSpellCheck((prev) => !prev);
  };

  const toggleWordLimitBox = () => {
    setShowWordLimitBox((prev) => !prev);
  };

  const setWordLimit = (value) => {
    setWordLimitCount(value);
  };

  function countAlphanumericCharacters(str) {
    const alphanumericRegex = /[A-Za-z0-9]/g;
    const matches = str.match(alphanumericRegex);
    return matches ? matches.length : 0;
  }

  function countWords(paragraph) {
    const words = paragraph.trim().split(/\s+/);
    return words.length;
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "dark" ? "dark" : "light"}
      />
      {showWordLimitBox ? (
        <WordLimit
          toggleWordLimitBox={toggleWordLimitBox}
          theme={theme}
          setWordLimit={setWordLimit}
        />
      ) : (
        <div
          className={`h-screen ${
            theme === "dark" ? "bg-[#05062f]" : "bg-[#f6ffdc]"
          } flex flex-col`}
        >
          <Toolbar
            changeTheme={changeTheme}
            theme={theme}
            changeFont={changeFont}
            changleSpellState={changleSpellState}
            toggleWordLimitBox={toggleWordLimitBox}
          />
          <Editor
            data={data}
            setData={setData}
            theme={theme}
            font={font}
            spellCheck={spellCheck}
          />
          <Footer length={length} theme={theme} wordsLength={wordsLength} />
        </div>
      )}
    </>
  );
}

export default App;
