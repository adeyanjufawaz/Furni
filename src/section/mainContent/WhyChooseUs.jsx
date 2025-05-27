import React from "react";
import DottedImage from "../../components/DottedImage";
import dot from "../../assets/img/orangeDot.png";
import couch from "../../assets/img/whyUsImg.png";
import { TbTruckDelivery } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { FaArrowsRotate } from "react-icons/fa6";
import { HiOutlineSupport } from "react-icons/hi";
import ChooseUsCard from "./components/ChooseUsCard";

function WhyChooseUs() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-8 md:mt-20">
      <div className="order-2  lg:order-1 min-h-[20vh] flex flex-col justify-center items-center">
        <section>
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <p className="mt-4 text-sm">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2 mt-12">
          <ChooseUsCard
            icon={TbTruckDelivery}
            title="Fast  & Free Shipping "
            content={
              "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
            }
          />
          <ChooseUsCard
            icon={FiShoppingBag}
            title="Easy to shop"
            content={
              "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
            }
          />
          <ChooseUsCard
            icon={HiOutlineSupport}
            title="24/7 support"
            content={
              "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
            }
          />

          <ChooseUsCard
            icon={FaArrowsRotate}
            title="Hassle Free Returns"
            content={
              "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was"
            }
          />
        </section>
      </div>
      <div className=" order-1  lg:order-2">
        <DottedImage
          imgHeight={"lg:h-[370px] h-[290px]"}
          dotPostition={"topLeft"}
          dotImg={dot}
          CouchIMga={couch}
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
