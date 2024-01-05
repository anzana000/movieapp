import React from "react";
import MovieCard from "./MovieCard";

const Popular = ({ imgsrc, title, popularity, votes }) => {
  return (
    <div className="flex flex-col sm:w-[300px] ">
      {/* <img
        src={`https://image.tmdb.org/t/p/w300/${imgsrc}`}
        alt={title}
        className="w-full object-cover rounded-md popular-img"
      /> */}
      <MovieCard poster={`https://image.tmdb.org/t/p/w300/${imgsrc}`} />
      <div className="flex justify-between  mt-2 w-full">
        <p className="text-white">
          {votes}
          <span className="text-sm text-slate-500"> votes</span>
        </p>
        <p className="text-white ">{popularity} P</p>
      </div>
    </div>
  );
};

export default Popular;
