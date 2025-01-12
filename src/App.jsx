import React from "react";
import { getMovie } from "./services/api";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = getMovie("/movie/1261501/images").then((data) => {
      console.log(data);
      setMovies(data.backdrops);
    });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.file_path}`}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
