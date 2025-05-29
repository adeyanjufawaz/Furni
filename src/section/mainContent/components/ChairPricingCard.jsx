

function ChairPricingCard({BGcolor,title,pricing,img}) {
  return (
    <div className={`group max-h-48 flex flex-col items-center justify-center hover:bg-grey cursor-pointer text-center relative`}>
      <img
        src={img}
        alt={img}
        className={`group-hover:absolute group-hover:bottom-1/2 max-h-40 max-w-3/4 mx-auto `}
      />
      <div className="group-hover:absolute mx-auto flex flex-col justify-between bottom-3">
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
