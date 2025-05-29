import React from "react";

function DottedImage({ dotPostition, dotImg, CouchIMga, imgHeight }) {
  return (
    <div
      className={`relative flex items-center justify-center p-4 overflow-hidden`}
    >
      {/* Dots Pattern */}
      <img
        src={dotImg}
        alt="dots"
        className={`absolute   z-0 ${
          dotPostition == "topRight"
            ? "-right-[5%] z-10 top-[15%] h-[30%] w-[35%]"
            : "left-[0%] -top-[35%]"
        }`}
      />

      {/* Couch Image */}
      <img
        src={CouchIMga}
        alt="couch"
        className={`relative ${imgHeight} w-full object-contain z-10`}
      />
    </div>
  );
}

export default DottedImage;
