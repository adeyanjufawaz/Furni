import React from 'react'

function DottedImage({dotPostition,dotImg,CouchIMga,imgHeight}) {
  return (
    <div className={`relative flex items-center justify-center p-4 overflow-hidden`}>
          {/* Dots Pattern */}
          <img
            src={dotImg}
            alt="dots"
            className={`absolute top-1 h-32 w-40 z-0 ${dotPostition == "topRight" ? "right-14" : "left-4 lg:left-14 "}`}
          />

          {/* Couch Image */}
          <img
            src={CouchIMga}
            alt="couch"
            className={`relative ${imgHeight} w-full object-contain z-10`}
          />
        </div>
  )
}

export default DottedImage