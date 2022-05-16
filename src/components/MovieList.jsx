import React, { useState, useEffect } from 'react';
import Loader from './UI/Loader/Loader';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);
  async function getMovies() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=483698be2836c105d00456d472854450'
      );
      setMovies((prevValue) => response.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="movie-cards">
      {isLoading ? (
        <Loader />
      ) : (
        movies.map((movie) => <MovieCard key={movie.id} movieData={movie} />)
      )}
    </div>
  );
};

export default MovieList;
