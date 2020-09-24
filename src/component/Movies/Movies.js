import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlipMove from 'react-flip-move';

import VideoCard from './VideoCard/VideoCard';
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

  return (
    <div className='movies'>
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Movies;
