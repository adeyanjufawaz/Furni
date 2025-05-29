import React from "react";

function ChooseUsCard({ icon: Icon, title, content }) {
  return (
    <div className="flex  flex-col gap-2">
      <div className="relative">
        <Icon className="z-99 " size={0} />

        <div className="absolute rounded-full bg-grey -bottom-2 left-2 h-8 w-8"></div>
      </div>
      <h2 className="text-sm font-semibold">{title}</h2>
      <p className="text-sm text-light font-medium ">{content}</p>
    </div>
  );
}

export default ChooseUsCard;
