import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState();
  async function getMovies() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=483698be2836c105d00456d472854450'
      );
      setMovies((prevValue) => response.data.results);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className="App">
      {/* {movies.map((movie) => (
        <p>{movie.original_title}</p>
      ))} */}
    </div>
  );
}

export default App;
