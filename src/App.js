import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
// import axios from "./axios";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> */}
      {/* <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> */}
    </div>
  );
}

export default App;
