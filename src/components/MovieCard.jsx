import React, { useState } from 'react';
import Like from './UI/Like/Like';
export default function MovieCard(props) {
  const [like, isLike] = useState();
  function handleLike() {
    isLike((prevState) => !prevState);
  }
  return (
    <div className="movie-card">
      <img
        className="movie-card__img"
        src={`https://image.tmdb.org/t/p/w200/${props.movieData.poster_path}`}
        alt={props.movieData.title}
      />
      <div className="movie-card__discription">
        <p className="movie-card__title">{props.movieData.title}</p>
        <p className="movie-card__release">{props.movieData.release_date}</p>
      </div>
      <Like like={like} fClick={handleLike} />
    </div>
  );
}
