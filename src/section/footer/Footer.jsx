import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import img from "../../assets/img/sofa.png";
import { Telegram } from "../../assets/icons";

function Footer() {
  return (
    <div className="pb-12 mt-14 w-full relative text-light">
      <div className="w-3/4 mx-auto sticky bottom-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex  gap-3 items-center">
              <MdOutlineEmail size={34} />
              <p className="text-black text-lg font-semibold">
                Subscribe to Newsletter
              </p>
            </div>
            <div className="flex mt-6 gap-3 flex-wrap">
              <input
                type="text"
                className="w-[35%] md:w-[40%] h-10 p-3 text-xs md:text-sm border rounded-md outline-0"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="w-[35%] md:w-[40%] h-10 p-3 text-xs md:text-sm border rounded-md outline-0"
                placeholder="Enter your Email"
              />
              <button className="w-10 h-10 p-2 flex justify-center items-center rounded-sm cursor-pointer bg-pry">
                <Telegram />
              </button>
            </div>
          </div>
          <div className="lg:absolute lg:-right-20 lg:-top-[15%]">
            <img src={img} alt="Sofa" className="w-[80%]" />
          </div>
        </div>
        <div className="mt-10 pb-12 border-b-2 border-b-grey  md:mt-20 lg:mt-32 gap-10 grid md:place-items-center md:place-content-center grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="mt-10">
            <h2 className="text-3xl text-black font-medium">Furni..</h2>
            <p className="mt-5">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done. the this is
              a long post for the text.`This small text has to be place here,
              since this is{" "}
            </p>
            <div className="mt-10 flex gap-2">
              <div className="h-10 w-10 rounded-full text-black cursor-pointer hover:text-pry hover:bg-yellow  p-2 flex justify-center items-center bg-grey">
                <FaFacebookF className="h-4/5 w-4/5" />
              </div>
              <div className="h-10 w-10 rounded-full text-black cursor-pointer hover:text-pry hover:bg-yellow  p-2 flex justify-center items-center bg-grey">
                <FaInstagram className="h-4/5 w-4/5" />
              </div>
              <div className="h-10 w-10 rounded-full text-black cursor-pointer hover:text-pry hover:bg-yellow  p-2 flex justify-center items-center bg-grey">
                <FaTwitter className="h-4/5 w-4/5" />
              </div>
              <div className="h-10 w-10 rounded-full text-black cursor-pointer hover:text-pry hover:bg-yellow  p-2 flex justify-center items-center bg-grey">
                <FaLinkedinIn className="h-4/5 w-4/5" />
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 grid gap-3 grid-cols-2">
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                {" "}
                About us
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Services
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Blog
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Contact us
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Support
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Knowledge base
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Live chat
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0 grid gap-5 grid-cols-2">
            <div className="flex flex-col gap-3">
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                {" "}
                Jobs
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Our team
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Leadership
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Privacy Policy
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Nordic Chair
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Kruzo Aero
              </p>
              <p className="cursor-pointer hover:text-yellow hover:font-semibold">
                Ergonomic
              </p>
            </div>
          </div>
        </div>

        <section className="mt-10 flex gap-5 flex-col lg:flex-row justify-between items-center">
          <div>
            <h2 className="font-normal text-sm">
              Copyright 2022 degraft87@gmail.com. All Rights Reserved.
            </h2>
          </div>
          <div className="flex gap-3">
            <h2 className="font-normal text-sm">
             Terms & Conditions
            </h2>
            <h2 className="font-normal text-sm">
              Privacy Policy
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
