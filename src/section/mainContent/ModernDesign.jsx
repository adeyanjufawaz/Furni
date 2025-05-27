import img1 from "../../assets/img/imggrid2.png";
import img2 from "../../assets/img/imggrid3.png";
import img3 from "../../assets/img/imggrid1.png";
import dot from "../../assets/img/greenCouchDot.png";
import chair1 from "../../assets/img/chair1.png"
import chair2 from "../../assets/img/chair2.png"
import chair3 from "../../assets/img/chair3.png"
import { MdOutlineDonutLarge } from "react-icons/md";
import CustomBtn from "../../components/CustomBtn";

function ModernDesign() {
  return (
    <>
      <div className=" grid justify-center  mx-auto items-center md:grid-cols-2 gap-20 mt-20">
        <section className=" w-[80%] min-h-96 relative">
          <div className="absolute h-[90%] w-full left-0 ">
            <img
              src={dot}
              alt=""
              className="z-1 h-30  absolute -left-[15%] opacity-100 -top-[15%]"
            />
            <img
              src={img1}
              alt="fllfflf"
              className="absolute h-full w-[65%] left-0 "
            />
          </div>
          <img
            src={img2}
            alt="fllfflf"
            className="absolute h-[60%] w-[60%] lg:h-[70%] left-[50%] top-[40%] "
          />
          <img
            src={img3}
            alt="fllfflf"
            className="absolute w-[40%] -right-10 lg:-right-8"
          />
        </section>
        <section className="w-full">
          <h2 className="text-3xl font-bold ">
            We help you make Modern Interior Design{" "}
          </h2>
          <p className="text-base mt-6">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is a place holder. You can also chane it.
          </p>
          <div className="my-8 grid gap-5 lg:grid-cols-2">
            <div className="flex lg:justify-between gap-5 items-center">
              <MdOutlineDonutLarge size={35} color="#3b5d50" />
              <div>
                <p className="text-sm">
                  Donec mattis porta eros,let aliquet finibus ri
                </p>
              </div>
            </div>
            <div className="flex lg:justify-between gap-5 items-center">
              <MdOutlineDonutLarge size={35} color="#3b5d50" />
              <div>
                <p className="text-sm">
                  Donec mattis porta eros,let aliquet finibus ri
                </p>
              </div>
            </div>
            <div className="flex lg:justify-between gap-5 items-center">
              <MdOutlineDonutLarge size={35} color="#3b5d50" />
              <div>
                <p className="text-sm">
                  Donec mattis porta eros,let aliquet finibus ri
                </p>
              </div>
            </div>
            <div className="flex lg:justify-between gap-5 items-center">
              <MdOutlineDonutLarge size={35} color="#3b5d50" />
              <div>
                <p className="text-sm">
                  Donec mattis porta eros,let aliquet finibus ri
                </p>
              </div>
            </div>
          </div>
          <CustomBtn BGcolor={"bg-black"} color={"text-white"}>
            Explore
          </CustomBtn>
        </section>
      </div>

      <div className="mt-20 grid gap-9 lg:grid-cols-3">
        <div className="flex gap-5">
          <div className="bg-grey rounded-md h-28 w-26">
            <img src={chair1} alt={img1} className="h-[120%] w-full z-10 " />
          </div>
          <div className="flex flex-col justify-center gap-1 w-3/4 ">
            <h2 className="text-xl font-semibold">Nordic Chair</h2>
            <p className="mt-2 text-sm">Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
            <p className="mt-3 font-medium text-sm ">Read more</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-grey rounded-md h-28 w-26">
            <img src={chair2} alt={img1} className="h-[120%] w-full z-10 " />
          </div>
          <div className="flex flex-col justify-center gap-1 w-3/4 ">
            <h2 className="text-xl font-semibold">Nordic Chair</h2>
            <p className="mt-2 text-sm">Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
            <p className="mt-3 font-medium text-sm ">Read more</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-grey rounded-md h-28 w-26">
            <img src={chair3} alt={img1} className="h-[120%] w-full z-10 " />
          </div>
          <div className="flex flex-col justify-center gap-1 w-3/4 ">
            <h2 className="text-xl font-semibold">Nordic Chair</h2>
            <p className="mt-2 text-sm">Donec mattis porta eros, aliquet finibus risus in. Donecd </p>
            <p className="mt-3 font-medium text-sm ">Read more</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModernDesign;
