// const API_KEY = `b847523692611caaffd06d42f9bd0ea9`;
 const API_KEY = `f27e1d5ff44bc4f72893a0ae237e468a`;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movies?api_key=${API_KEY}&page=1&with_genres=28`,
   fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&page=1&with_genres=35`,
  fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&page=1&with_genres=27`,
  // fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&page=1&with_genres=10749`,
  // fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&page=1&with_genres=99`,

  // fetchTrending: `/trending/all/week?api_key=b847523692611caaffd06d42f9bd0ea9&language=en-US`,
  // fetchNetflixOriginals: `/discover/tv?api_key=b847523692611caaffd06d42f9bd0ea9&with_networks=213`,
  // fetchTopRated: `/movie/top_rated?api_key=b847523692611caaffd06d42f9bd0ea9&language=en-US`,
  // fetchActionMovies: `/discover/movies?api_key=b847523692611caaffd06d42f9bd0ea9&page=1&with_genres=28`,
  // fetchComedyMovies: `/discover/movies?api_key=b847523692611caaffd06d42f9bd0ea9&page=1&with_genres=35`,
  // fetchHorrorMovies: `/discover/movies?api_key=b847523692611caaffd06d42f9bd0ea9&page=1&with_genres=27`,
  // fetchRomanceMovies: `/discover/movies?api_key=b847523692611caaffd06d42f9bd0ea9&page=1&with_genres=10749`,
  // fetchDocumentaries: `/discover/movies?api_key=b847523692611caaffd06d42f9bd0ea9&page=1&with_genres=99`,
};

export default requests;
