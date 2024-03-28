import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(MainContext);
  return (
    <>
      <div className="flex items-center justify-center mb-3 h-[57px]">
        <button onClick={toggleDarkMode}>
          <div className="relative">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="sr-only"
              checked={isDarkMode}
              readOnly 
              onChange={toggleDarkMode}
            />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              className={`dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                isDarkMode
                  ? "transform translate-x-full bg-blue-600"
                  : "bg-gray-300"
              }`}
            ></div>
          </div>
        </button>
        <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          
        </span>
      </div>
    </>
  );
};
