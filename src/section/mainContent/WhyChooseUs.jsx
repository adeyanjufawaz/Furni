import React from "react";
import dot from "../../assets/img/orangeDot.png";
import couch from "../../assets/img/whyUsImg.png";
import { TbTruckDelivery } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { FaArrowsRotate } from "react-icons/fa6";
import { HiOutlineSupport } from "react-icons/hi";
import ChooseUsCard from "./components/ChooseUsCard";
import { Bag, Return, Support, Truck } from "../../assets/icons";

function WhyChooseUs() {
  return (
    <div className="grid lg:grid-cols-2 gap-20 mt-20">
      <div className="order-2 lg:order-1 min-h-[20vh] flex flex-col justify-center items-center">
        <section>
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <p className="mt-4 text-light font-normal text-sm">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2 mt-18">
          <ChooseUsCard
            icon={Truck}
            title="Fast  & Free Shipping "
            content={
              "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
            }
          />
          <ChooseUsCard
            icon={Bag}
            title="Easy to shop"
            content={
              "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
            }
          />
          <ChooseUsCard
            icon={Support}
            title="24/7 support"
            content={
              "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
            }
          />

          <ChooseUsCard
            icon={Return}
            title="Hassle Free Returns"
            content={
              "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
            }
          />
        </section>
      </div>

      <div className=" order-1 relative mt-12 w-7/8 lg:justify-self-end lg:order-2">
         <div className={` flex items-center justify-center p-4 overflow-hidden`}>
          {/* Dots Pattern */}
          <img
            src={dot}
            alt="dots"
            className={`absolute -left-[20%] -top-[5%] h-[30%] w-[50%] z-1`}
          />

          {/* Couch Image */}
          <img
            src={couch}
            alt="couch"
            className={`relative  object-contain z-10`}
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
