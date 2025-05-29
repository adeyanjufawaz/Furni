import img1 from "../../assets/img/maskgroup1.png";
import img2 from "../../assets/img/maskgroup2.png";
import img3 from "../../assets/img/maskgroup3.png";

function Blog() {
  return (
    <div>
      <div className="flex mt-10 justify-between items-center">
        <h2 className="text-xl font-bold">Recent Blog</h2>
        <p className="text-sm font-bold border-b-2">View All Post</p>
      </div>
      <div className="grid lg:grid-cols-3">
        <div className="flex flex-col gap-2 w-4/5 mx-auto my-9">
          <div className="">
            <img src={img2} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <h2 className="text-base font-bold">First Time Home Owner Ideas</h2>
            <p className="font-semibold"> <span className="text-light text-sm font-normal">by</span> Nana Ama <span className="text-light text-sm font-normal">on</span> Nov 18th, 2022</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-4/5 mx-auto my-9">
          <div className="">
            <img src={img1} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <h2 className="text-base font-bold">First Time Home Owner Ideas</h2>
            <p className="font-semibold"> <span className="text-light text-sm font-normal">by</span> Nana Ama <span className="text-light text-sm font-normal">on</span> Nov 18th, 2022</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-4/5 mx-auto my-9">
          <div className="">
            <img src={img3} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <h2 className="text-base font-bold">First Time Home Owner Ideas</h2>
            <p className="font-semibold"> <span className="text-light text-sm font-normal">by</span> Nana Ama <span className="text-light text-sm font-normal">on</span> Nov 18th, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
