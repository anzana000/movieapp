import React from "react";

const Favourites = ({ text, iconclass }) => {
  return (
    <div className="absolute  bottom-0 right-0 left-0 bg-black opacity-70 w-full h-10 hidden justify-center items-center gap-2 overlay">
      <p className="text-white ">{text}</p>

      <i className={`${iconclass} text-white hover:text-red-600`}></i>
    </div>
  );
};

export default Favourites;
