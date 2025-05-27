import React from "react";
import CustomBtn from "../../components/CustomBtn";
import dots from "../../assets/img/greenCouchDot.png";
import couch from "../../assets/img/greenCouch.png";
import DottedImage from "../../components/DottedImage";

function HeaderContents() {
  return (
    <div className="pt-10 grid gap-3 md:grid-cols-[1fr_1.3fr]">
      <section class="flex flex-col justify-center gap-12 order-2 md:order-1 w-full">
        <div>
          <h2 className="text-4xl md:text-6xl text-white font-semibold">
            Modern Interior Design Studio
          </h2>
        </div>
        <div className="flex flex-wrap gap-5">
          <CustomBtn BGcolor={"bg-yellow"} color={"text-black"}>
            Shop Now
          </CustomBtn>
          <CustomBtn border={"border-1 border-white"} color={"black"}>Explore</CustomBtn>
        </div>
        <div></div>
      </section>

      <section class="order-1 md:order-2 w-full">
        <DottedImage dotPostition={"topRight"} dotImg={dots} CouchIMga={couch}/>
      </section>
    </div>
  );
}

export default HeaderContents;
