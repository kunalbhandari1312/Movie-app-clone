import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css"
function Row({ title, fetchUrl }) {

  // const base_url="https://image.tmdb.org/t/p/original/";
  const base_url="https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchUrl);
      //   console.log(requests.data.results);
      setMovies(requests.data.results);
       return requests;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img key={movie.id}
          className="row_poster"
           src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Row;
