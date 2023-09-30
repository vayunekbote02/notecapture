const Footer = ({ length, theme }) => {
  return (
    <div
      className={`flex justify-end items-center p-5 pr-12 text-white text-xl font-bold ${
        theme
          ? "text-gray-700 hover:text-white"
          : "text-yellow-400 hover:text-black"
      }`}
    >
      <h3>{length} characters</h3>
    </div>
  );
};

export default Footer;
