import { useState } from "react";
import { testimonials } from "../../../utilities/testimonial";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

function TestimonialCard() {
  const [curCardIndex, setCurCardIndex] = useState(0);
  const prev = () => {
    curCardIndex == 0
      ? setCurCardIndex(testimonials.length - 1)
      : setCurCardIndex((prev) => prev - 1);
  };
  const next = () => {
    curCardIndex == testimonials.length - 1
      ? setCurCardIndex(0)
      : setCurCardIndex((prev) => prev + 1);
  };
  const moveToPosition = (position) => {
    setCurCardIndex(position)
  };
  const { testimony, img, userName, position } = testimonials[curCardIndex];
  return (
    <div>
      <div className="flex justify-center items-center relative p-6">
        <button
          onClick={prev}
          className="h-8 w-8 flex hover:bg-pry hover:text-white justify-center items-center bg-grey absolute left-0 top-1/2 p-4 rounded-full cursor-pointer"
        >
          <div>
            <BiLeftArrowAlt size={24} />
          </div>
        </button>
        <main className="shadow-md shadow-grey flex flex-col justify-center items-center p-4 md:p-10 w-7/8 md:w-5/6 mx-auto min-h-44">
          <h2 className="text-xs md:text-base font-normal md:w-3/4">
            {testimony}
          </h2>
          <section className="flex flex-col justify-center items-center gap-3 mt-8 ">
            <div className="h-14 w-14 rounded-full flex justify-center items-center bg-amber-400">
              <img
                src={img}
                alt="dkkdkd"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h2 className="text-lg font-normal">{userName}</h2>
            <p className="text-base text-light font-normal ">{position}.</p>
          </section>
        </main>
        <button
          onClick={next}
          className={`h-8 w-8 flex hover:bg-pry hover:text-white justify-center items-center bg-grey  absolute right-0 top-1/2 p-4 rounded-full cursor-pointer`}
        >
          <div>
            <BiRightArrowAlt size={24} />
          </div>
        </button>

        {/*  */}
      </div>
      <div className="flex justify-center mt-4 gap-1">
        {testimonials.map((cur, ind) => (
          <div
            onClick={() => moveToPosition(ind)}
            key={ind}
            className={`h-4 w-4 cursor-pointer rounded-full ${
              ind === curCardIndex ? "bg-pry" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
