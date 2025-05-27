import React from "react";

function CustomBtn({ color, BGcolor, border, children }) {
  return (
    <button
      className={`p-4 cursor-pointer  text-xs md:text-base hover:scale-105  w-28 h-10 rounded-3xl  flex justify-center items-center md:w-36 md:h-12 ${border} ${color} ${BGcolor}`}
    >
      {children}
    </button>
  );
}

export default CustomBtn;
