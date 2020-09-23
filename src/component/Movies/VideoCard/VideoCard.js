import React from 'react';

import './VideoCard.css';

const VideoCard = ({ movie }) => {
  const base_img_url = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className='videoCard'>
      <img
        src={`${base_img_url}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_name}
      />
      <p>{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p>Number of likes: {movie.vote_count}</p>
    </div>
  );
};

export default VideoCard;
