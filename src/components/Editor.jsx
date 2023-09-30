const Editor = ({ data, setData, theme }) => {
  return (
    <div className="px-4 md:px-32 text-base md:text-lg grow">
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Start typing..."
        className={`w-full h-full resize-none bg-transparent outline-none ${
          theme ? "text-white" : " text-black"
        } scroll-smooth`}
      />
    </div>
  );
};

export default Editor;
