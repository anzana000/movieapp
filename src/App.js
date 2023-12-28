import React, { useState, useEffect } from "react";
import Movie from "./Components/Movie";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async (search) => {
    const apiurl = `http://www.omdbapi.com/?s=${search}&apikey=17d176df`;
    const moviesList = await fetch(apiurl);
    const moviesListJSON = await moviesList.json();
    console.log("moviesListjson", moviesListJSON);
    if (moviesListJSON.Search) {
      setMovies(moviesListJSON.Search);
    }
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);
  return (
    <div className=" p-6 flex flex-col justify-center items-start app">
      <div className="flex w-full justify-between mb-5 ">
        <h1 className="text-lg text-white font-semibold uppercase  ">
          Movie App
        </h1>
        <input
          placeholder="enter the search value"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="flex flex-wrap justify-center  movies-container">
        {movies.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
