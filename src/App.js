import React, { useState } from 'react';

import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Movies from './component/Movies/Movies';
import './App.css';
import request from './request';

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);

  return (
    <div className='app'>
      <Header />

      {/* Nav section */}
      <Nav setSelectedOption={setSelectedOption} />

      {/* Movies section */}
      <Movies selectedOption={selectedOption} />
    </div>
  );
}

export default App;
