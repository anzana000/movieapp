import React from "react";
import MovieCard from "./MovieCard";

const Upcoming = ({ imgsrc, date, movie }) => {
  return (
    <div className="flex flex-col ">
      <MovieCard
        poster={`https://image.tmdb.org/t/p/w300/${imgsrc}`}
        movie={movie}
        id={movie.id}
      />

      <p className="text-white  mt-2">{date}</p>
    </div>
  );
};

export default Upcoming;
