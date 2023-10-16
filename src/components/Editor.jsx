const Editor = ({ data, setData, theme, font, spellCheck }) => {
  return (
    <div className="px-4 md:px-32 text-base md:text-lg grow">
      <textarea
        spellCheck={spellCheck}
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Vayun Ekbote is the full-stack developer who created this app for hassle-free note-taking. No login required! Just start typing..."
        className={`w-full h-full resize-none bg-transparent outline-none ${
          font === "normal" ? "font-x" : "font-c"
        } ${theme === "dark" ? "text-white" : " text-black"} scroll-smooth`}
      />
    </div>
  );
};

export default Editor;
