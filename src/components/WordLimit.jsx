import { useState } from "react";

export default function WordLimit({ toggleWordLimitBox, theme, setWordLimit }) {
  const [words, setWords] = useState(0);

  const saveChanges = () => {
    setWordLimit(parseInt(words, 10));
    toggleWordLimitBox();
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between p-5 rounded-t border-solid border-b-gray-200 border">
              <h3 className="text-3xl font-semibold">Word Limit</h3>
              <button
                className="bg-transparent border-0 text-black text-3xl leading-none"
                onClick={toggleWordLimitBox}
              >
                <span className="bg-transparent text-black text-2xl block outline-none focus:outline-none">
                  ❌
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex flex-col items-center">
              <p className="my-4  text-lg leading-relaxed text-center">
                Specify the word count you wish to write. Setting a target is a
                valuable practice, propelling you toward your goals efficiently!
              </p>
              <input
                type="text"
                className="p-3 border-2 border-black outline-none text-center font-x text-2xl focus:border-blue-300"
                onChange={(e) => setWords(e.target.value)}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={toggleWordLimitBox}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={saveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`opacity-50 fixed inset-0 z-40 ${
          theme === "dark" ? "bg-[#05062f]" : "bg-[#f6ffdc]"
        }`}
      ></div>
    </>
  );
}
