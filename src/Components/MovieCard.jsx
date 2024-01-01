import React from "react";

const MovieCard = ({ poster, detail }) => {
  return (
    <div className="moviecard">
      <img
        src={poster}
        className="w-full h-full object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default MovieCard;
