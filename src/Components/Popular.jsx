import React from "react";
import MovieCard from "./MovieCard";

const Popular = ({ imgsrc, title, popularity, votes }) => {
  return (
    <div className="flex flex-col  popular">
      {/* <img
        src={`https://image.tmdb.org/t/p/w300/${imgsrc}`}
        alt={title}
        className="w-full object-cover rounded-md popular-img"
      /> */}
      <MovieCard poster={`https://image.tmdb.org/t/p/w300/${imgsrc}`} />
      <div className="flex justify-between w-full mt-2">
        <p className="text-white">
          {votes}
          <span className="text-sm text-slate-500"> votes</span>
        </p>
        <p className="text-white">{popularity}</p>
      </div>
    </div>
  );
};

export default Popular;
