import React from "react";

const Movie = ({ movie }) => {
  console.log("inside movie", movie);
  return (
    <div className="m-2 relative cursor-pointer movie-card">
      <img src={movie.Poster} alt={movie.Title} className=" movie-poster" />
      <p className="text-slate-400">Released year: {movie.Year}</p>
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70 w-full h-full hidden justify-center items-center gap-2 overlay">
        <p className="text-white ">Add to favourites</p>
        {/* <i className="fa-regular fa-heart text-white hover:text-red-700"></i> */}
        <i class="fa-solid fa-heart text-white hover:text-red-600"></i>
      </div>
    </div>
  );
};

export default Movie;
