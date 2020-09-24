import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';

import './VideoCard.css';

const VideoCard = forwardRef(({ movie }, ref) => {
  const base_img_url = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className='videoCard' ref={ref}>
      <img
        src={`${base_img_url}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_name}
      />
      <TextTruncate
        line={1}
        element='p'
        truncateText='...'
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className='videoCard__stats'>
        {movie.media_type && `${movie.media_type}`}
        {movie.release_date || movie.first_air_date}
        <span>
          <ThumbUpSharp /> {movie.vote_count}
        </span>
      </p>
    </div>
  );
});

export default VideoCard;
