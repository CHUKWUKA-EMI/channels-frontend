import React, { FunctionComponent, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: React.SetStateAction<boolean>) => void;
}
export const SearchModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <>
      {isBrowser &&
        ReactDOM.createPortal(
          <aside
            className={`w-full h-full absolute inset-y-0 items-center justify-center  p-3 bg-slate-900 bg-opacity-80 ${
              isOpen ? "flex" : "hidden"
            } z-50 shadow-slate-900 transform transition duration-200 ease-in-out`}
          >
            <div className="flex flex-col md:w-3/4 md:h-3/4 relative rounded-lg p-2 bg-slate-700">
              <div className="flex w-full items-center border-b-2 px-2 border-slate-500 absolute top-0 left-0 right-0 justify-between">
                <form className="w-full h-12 flex items-center rounded-lg space-x-2 p-2 bg-slate-700">
                  <div className="text-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 font-semibold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    className="w-[80%] bg-inherit p-2 text-white font-semibold placeholder:text-slate-300 placeholder:font-semibold focus:outline-none h-full"
                    type="search"
                    placeholder="Search channels"
                    autoFocus={true}
                  />
                </form>
                <button onClick={() => setIsOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div></div>
            </div>
          </aside>,
          document.getElementById("modal") as HTMLElement
        )}
    </>
  );
};
