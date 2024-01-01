import React, { useState, useEffect } from "react";
import Movie from "./Components/Movie";
import Popular from "./Components/Popular";
import "./App.css";

function App() {
  // states
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [populars, setPopulars] = useState([]);

  // getting movies from api
  const getMovies = async (search) => {
    // const apiurl = `http://www.omdbapi.com/?s=${search}&apikey=17d176df`;
    const apiurl = `https://api.themoviedb.org/3/search/movie?api_key=25641a15ad298efbe8a66112855f274b&language=en-US&query=${search}&page=1&include_adult=false`;
    const moviesList = await fetch(apiurl);
    const moviesListJSON = await moviesList.json();
    console.log("moviesListjson neww one", moviesListJSON);
    if (moviesListJSON.results) {
      setMovies(moviesListJSON.results);
    }
    console.log("my movies", movies);
  };

  // adding favourites to the list
  const addToFavourites = (movie) => {
    if (!favourites.some((fav) => fav.id === movie.id)) {
      setFavourites([...favourites, movie]);
    }
  };

  //removing favourites from the list
  const removeFromFavourites = (id) => {
    const seletedMovie = favourites.filter((favourite) => favourite.id !== id);
    setFavourites(seletedMovie);
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  const getPopular = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=25641a15ad298efbe8a66112855f274b&language=en-US";
    const moviesL = await fetch(url);
    const moviesListJS = await moviesL.json();
    console.log("moviesListjson another", moviesListJS);
    setPopulars(moviesListJS.results);
    console.log("Popular movies", populars);
  };
  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div className=" p-6 flex flex-col justify-center items-start app">
      <div className="flex w-full justify-between mt-5 ">
        <h1 className="text-xl text-white font-semibold uppercase ">
          Movie App
        </h1>
        <input
          placeholder="enter the search value"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Movies section */}
      <div className="flex flex-wrap justify-center  mt-2 movies-container">
        {movies.length === 0 ? (
          <p className="text-red-500">No movies to show</p>
        ) : (
          movies.slice(0, 8).map((movie) => {
            return (
              <Movie
                movie={movie}
                addToFavourites={addToFavourites}
                text="Add to favourites"
                iconclass="fa-solid fa-heart"
              />
            );
          })
        )}
      </div>
      <h1 className="text-xl text-white font-semibold uppercase  mt-10 ">
        Popular
      </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-2 popular-container">
        {populars.slice(0, 8).map((popular) => {
          return (
            <Popular
              key={popular.id}
              imgsrc={popular.poster_path}
              votes={popular.vote_count}
              popularity={popular.popularity}
            />
          );
        })}
      </div>

      {/* Favourites section */}
      <h1 className="text-xl text-white font-semibold uppercase  mt-10 ">
        Favourites
      </h1>
      <div className="flex flex-wrap justify-center mt-2">
        {favourites.length === 0 ? (
          <p className="text-red-500 ">No favourites been added</p>
        ) : (
          favourites.map((favourite) => {
            return (
              <Movie
                movie={favourite}
                removeFromFavourites={removeFromFavourites}
                text="Remove from favourites"
                iconclass="fa-solid fa-minus"
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
