import { useState } from "react";
import { testimonials } from "../../utilities/testimonial";

import img1 from "../../assets/img/chair1.png";
import TestimonialCard from "./components/TestimonialCard";

export default function Testimonial() {
  return (
    <div className=" py-2 px-2 text-center">
      <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
     <TestimonialCard/>
    </div>
  );
}
