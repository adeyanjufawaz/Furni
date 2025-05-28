import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import img from "../../assets/img/sofa.png";

function Footer() {
  return (
    <div className=" relative p-[5%] ">
      <div className="grid gap-7 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="flex gap-3 items-center">
            <MdOutlineEmail size={34} />
            <p>Subscribe to Newsletter</p>
          </div>
          <div className="flex mt-6 gap-4 flex-wrap">
            <input
              type="text"
              className=" w-32 lg:w-56 h-10 p-3 text-xs md:text-sm border rounded-md outline-0"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className=" w-32 lg:w-56 h-10 p-3 text-xs md:text-sm border rounded-md outline-0"
              placeholder="Enter your Email"
            />
            <button className="w-10 h-10 p-2  bg-pry">
              <FaLocationArrow className="h-full w-full" color="white" />
            </button>
          </div>
        </div>
        <div className="lg:absolute lg:right-[7%] lg:-top-16">
          <img src={img} alt="Sofa" className="w-[80%]" />
        </div>
      </div>
      <div className="mt-20  min-h-[50vh] grid md:place-items-center md:place-content-center grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="text-3xl">Furni..</h2>
          <p className="mt-5">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is{" "}
          </p>
          <div className="mt-10 flex gap-1">
            <div className="h-1o w-10 cursor-pointer hover:text-pry hover:bg-yellow  p-2 rounded flex justify-center items-center bg-grey">
              <FaFacebookF className="h-full w-full" />
            </div>
            <div className="h-1o w-10 cursor-pointer hover:text-pry hover:bg-yellow  p-2 rounded flex justify-center items-center bg-grey">
              <FaInstagram className="h-full w-full" />
            </div>
            <div className="h-1o w-10 cursor-pointer hover:text-pry hover:bg-yellow  p-2 rounded flex justify-center items-center bg-grey">
              <FaTwitter className="h-full w-full" />
            </div>
            <div className="h-1o w-10 cursor-pointer hover:text-pry hover:bg-yellow  p-2 rounded flex justify-center items-center bg-grey">
              <FaLinkedinIn className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 grid gap-5 grid-cols-2">
          <div className="flex flex-col gap-3">
            <p className="cursor-pointer hover:text-yellow hover:font-semibold"> About us</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Services</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Blog</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Contact us</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Support</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Knowledge base</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Live chat</p>
          </div>
        </div>
        <div className="mt-10 md:mt-0 grid gap-5 grid-cols-2">
          <div className="flex flex-col gap-3">
            <p className="cursor-pointer hover:text-yellow hover:font-semibold"> Jobs</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Our team</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Leadership</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Nordic Chair</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Kruzo Aero</p>
            <p className="cursor-pointer hover:text-yellow hover:font-semibold">Ergonomic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
