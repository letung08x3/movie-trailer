import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

function MovieList({ title1, title2, movie, movie2 }) {
  const { handleTrailer } = useContext(MovieContext);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="text-white p-10 mb-10">
      {/* Danh sách phim Hot */}
      <h2 className="uppercase text-xl mb-4">{title1}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {movie.length > 0 &&
          movie.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
      <br></br>
      {/* Danh sách phim Đề Cử */}
      <h2 className="uppercase text-xl mb-4">{title2}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {movie2.length > 0 &&
          movie2.map((item) => (
            <div key={item.id} className="w-[200px] h-[300px] relative group">
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default MovieList;
