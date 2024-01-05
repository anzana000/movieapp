import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, movie, id }) => {
  console.log("Movie card detailsssssss", movie);

  return (
    <div className="sm:w-[300px] sm:h-[300px] w-[100%] h-[300px] ">
      <Link
        // to={{ pathname: `/detail/${id}`, state: { movie } }}
        to={`/detail/${id}`}
        state={{ movie }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={poster}
          className="w-full h-full object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
