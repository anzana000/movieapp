import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const poster = location.state?.movie;

  console.log("Details", poster);

  return (
    <div className="flex justify-center flex-col items-center w-full ">
      <div className="w-full sm:h-[100vh] h-[30vh] ">
        <img
          src={`https://image.tmdb.org/t/p/original${poster.backdrop_path}`}
          alt=""
          className="w-full h-full object-cover relative"
        />
        <div className="fixed w-full h-full bg-black opacity-70 left-0 bottom-0 right-0"></div>
        <div className="flex sm:flex-row flex-col justify-center items-center sm:justify-between sm:gap-10 absolute sm:bottom-20 sm:left-20 sm:w-[70%] w-full mt-[-20px]">
          <img
            src={`https://image.tmdb.org/t/p/original${poster.poster_path}`}
            alt=""
            className="sm:w-[300px] w-[90%] sm:h-[400px] h-[300px] object-cover object-top rounded-md"
          />

          <div className="flex flex-col justify-center p-4">
            <h1 className="text-white text-2xl font-semibold">
              {poster.title}
            </h1>
            <p className="text-white font-sm font-light">
              {poster.release_date}
            </p>
            <p className="text-slate-300 mt-5 text-justify">
              {poster.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
