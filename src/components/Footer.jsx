const Footer = ({ length, theme, wordsLength }) => {
  return (
    <div
      className={`flex justify-end items-center p-5 pr-12 text-xl font-bold ${
        theme === "dark"
          ? "text-gray-700 hover:text-white"
          : "text-yellow-400 hover:text-black"
      }`}
    >
      <h3>
        {length} characters, {wordsLength} words
      </h3>
    </div>
  );
};

export default Footer;
