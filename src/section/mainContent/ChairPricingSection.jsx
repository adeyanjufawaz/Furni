import ChairPricingCard from "./components/ChairPricingCard";
import chair1 from "../../assets/img/chair1.png";
import chair2 from "../../assets/img/chair2.png";
import chair3 from "../../assets/img/chair3.png";
import CustomBtn from "../../components/CustomBtn";

function ChairPricingSection() {
  return (
    <div className="grid gap-20 md:gap-2 pt-20 justify-center md:grid-cols-3 lg:grid-cols-4">
      <div className="flex gap-4 flex-wrap w-52 h-64">
        <h2 className="text-3xl font-semibold">
          Crafted with excellent material.
        </h2>
        <p className="text-sm font-normal">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>
        <CustomBtn BGcolor={"bg-black"} color={"text-white"}>
          Explore
        </CustomBtn>
      </div>
      <ChairPricingCard
        title={"Nordic CHAIR"}
        pricing={"$50.00"}
        img={chair1}
        BGcolor={"bg-grey"}
      />
      <ChairPricingCard
        title={"Kruzo Aero Chair"}
        pricing={"$78.00"}
        img={chair2}
        BGcolor={""}
      />
      <ChairPricingCard
        title={"Ergonomic Chair"}
        pricing={"$43.00"}
        img={chair3}
        BGcolor={""}
      />
    </div>
  );
}

export default ChairPricingSection;
