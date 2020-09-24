import React, { useEffect, useState } from 'react';

import VideoCard from './VideoCard/VideoCard';
import axios from 'axios';
import request from '../../request';
import './Movies.css';

const Movies = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3${selectedOption}`
      );
      setMovies(res.data.results);

      return res;
    }

    fetchData();
  }, [selectedOption]);

  console.log(movies);

  return (
    <div className='movies'>
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
