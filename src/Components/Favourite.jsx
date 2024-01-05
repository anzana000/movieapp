import React from "react";
import MovieCard from "./MovieCard";

const Favourite = ({ imgsrc, favourite }) => {
  return (
    <div className="flex flex-col ">
      <MovieCard poster={`https://image.tmdb.org/t/p/w300/${imgsrc}`} />
      <p className="text-white">{favourite.title}</p>
    </div>
  );
};

export default Favourite;
