import React from "react";
import Favourites from "./Favourites";
import MovieCard from "./MovieCard";

const Movie = ({
  movie,
  addToFavourites,
  text,
  iconclass,
  removeFromFavourites,
}) => {
  console.log("inside movie", movie);
  return (
    <div
      className="m-2 relative   movie-card"
      onClick={() =>
        text === "Add to favourites"
          ? addToFavourites(movie)
          : removeFromFavourites(movie.id)
      }
    >
      <MovieCard
        poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
      />
      <div className="flex justify-between mt-2 ">
        <p className="text-white">{movie.release_date}</p>
        <p className="text-white">
          {Math.round(movie.vote_average)}{" "}
          <i className="fa-solid fa-star text-yellow-500"></i>
        </p>
      </div>

      <Favourites text={text} iconclass={iconclass} />
    </div>
  );
};

export default Movie;
