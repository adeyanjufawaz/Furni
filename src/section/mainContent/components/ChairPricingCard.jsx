import chair1 from "../../../assets/img/chair1.png";

function ChairPricingCard({BGcolor,title,pricing,img}) {
  return (
    <div className={`flex justify-center w-64 h-64 ${BGcolor} text-center relative`}>
      <img
        src={img}
        alt={img}
        className={`absolute bottom-20 h-56 `}
      />
      <div className="absolute flex flex-col justify-between bottom-3">
        <h1 className="text-base font-semibold">{title}</h1>
        <p className="font-bold text-lg">{pricing}</p>
      </div>
    </div>
  );
}

export default ChairPricingCard;

{
  /*Width
296px
Height
307px*/
}
