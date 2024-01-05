import React, { useState, useEffect } from "react";
import Movie from "../Components/Movie";
import Popular from "../Components/Popular";
import Upcoming from "../Components/Upcoming";
import Favourite from "../Components/Favourite";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

function Home() {
  // states
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  console.log("favourites", favourites);

  // getting movies from api
  const getMovies = async (search) => {
    // const apiurl = `http://www.omdbapi.com/?s=${search}&apikey=17d176df`;
    const apiurl = `https://api.themoviedb.org/3/search/movie?api_key=25641a15ad298efbe8a66112855f274b&language=en-US&query=${search}&page=1&include_adult=false`;
    const moviesList = await fetch(apiurl);
    const moviesListJSON = await moviesList.json();
    // console.log("moviesListjson neww one", moviesListJSON);
    if (moviesListJSON.results) {
      setMovies(moviesListJSON.results);
    }
    // console.log("my movies", movies);
  };

  // adding favourites to the list
  const addToFavourites = (movie) => {
    if (!favourites.some((fav) => fav.id === movie.id)) {
      const updatedFavourites = [...favourites, movie];
      setFavourites(updatedFavourites);
      saveToLocal(updatedFavourites);
    }
  };

  //removing favourites from the list
  const removeFromFavourites = (id) => {
    const seletedMovie = favourites.filter((favourite) => favourite.id !== id);
    setFavourites(seletedMovie);
    saveToLocal(seletedMovie);
    console.log("removed from favourites");
  };

  //save favourites to local storage
  const saveToLocal = (fav) => {
    localStorage.setItem("favourites-list", JSON.stringify(fav));
  };

  useEffect(() => {
    const favouritesList = JSON.parse(localStorage.getItem("favourites-list"));
    setFavourites(favouritesList);
  }, []);

  useEffect(() => {
    getMovies(search);
  }, [search]);

  const getPopular = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=25641a15ad298efbe8a66112855f274b&language=en-US";
    const moviesL = await fetch(url);
    const moviesListJS = await moviesL.json();

    setPopulars(moviesListJS.results);
  };

  const getUpcoming = async () => {
    const uurl =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=25641a15ad298efbe8a66112855f274b&language=en-US";
    const upcomingMovies = await fetch(uurl);
    const upcomingList = await upcomingMovies.json();

    setUpcoming(upcomingList.results);
  };
  useEffect(() => {
    getPopular();
    getUpcoming();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" p-2 sm:p-6 flex flex-col justify-center items-start app ">
      <div className="flex flex-col sm:flex-row w-full justify-between mt-5 ">
        <h1 className="text-xl text-white font-semibold uppercase ">
          Movie App
        </h1>
        <input
          placeholder="enter the search value"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[300px] px-[5px] py-[10px] outline-0 border-0 rounded my-2 sm:my-0"
        />
      </div>

      {/* Movies section */}
      {movies.length === 0 ? (
        <p className="text-red-500">No movies to show</p>
      ) : (
        <div className="flex   mt-2 movies-container">
          <Slider {...settings}>
            {movies.slice(0, 8).map((movie) => {
              return (
                <Movie
                  id={movie.id}
                  movie={movie}
                  addToFavourites={addToFavourites}
                  text="Add to favourites"
                  iconclass="fa-solid fa-heart"
                />
              );
            })}
          </Slider>
        </div>
      )}

      {/* Upcoming section */}
      <h1 className="text-xl text-white font-semibold uppercase  mt-10 ">
        Upcoming
      </h1>
      <div className="flex  mt-2">
        <Slider {...settings}>
          {upcoming.map((upc) => {
            return (
              <Upcoming
                key={upc.id}
                imgsrc={upc.poster_path}
                date={upc.release_date}
              />
            );
          })}
        </Slider>
      </div>

      {/* Popular section */}
      <h1 className="text-xl text-white font-semibold uppercase  mt-10 ">
        Popular
      </h1>
      {/* <div className="flex flex-wrap justify-center gap-4 mt-2 w-50 popular-container"> */}
      <div className="flex  mt-2">
        <Slider {...settings}>
          {populars.map((popular) => {
            return (
              <Popular
                key={popular.id}
                imgsrc={popular.poster_path}
                votes={popular.vote_count}
                popularity={popular.popularity}
              />
            );
          })}
        </Slider>
      </div>

      {/* Favourites section */}
      <h1 className="text-xl text-white font-semibold uppercase  mt-10 ">
        Favourites
      </h1>
      <div className="flex flex-wrap justify-center mt-2 ">
        {favourites.length === 0 ? (
          <p className="text-red-500 ">No favourites been added</p>
        ) : (
          favourites.map((favourite) => {
            return (
              <Movie
                id={favourite.id}
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

export default Home;
