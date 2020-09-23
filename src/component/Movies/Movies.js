import React, { useEffect, useState } from 'react';

import VideoCard from './VideoCard/VideoCard';
import axios from 'axios';
import request from '../../request';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3${request.fetchActionMovies}`
      );
      setMovies(res.data.results);

      return res;
    }

    fetchData();
  }, []);

  return (
    <div className='movies'>
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
