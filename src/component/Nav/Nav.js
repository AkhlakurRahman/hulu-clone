import React from 'react';
import request from '../../request';

import './Nav.css';

const Nav = ({ setSelectedOption }) => {
  return (
    <div className='nav'>
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>
        {' '}
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchMysteryMovies)}>
        Mystery
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchSciFiMovies)}>
        Sci-Fi
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchWesternMovies)}>
        Western
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchAnimationMovies)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(request.fetchTV)}>TV Movie</h2>
    </div>
  );
};

export default Nav;
