import React from 'react';

import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Movies from './component/Movies/Movies';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />

      {/* Nav section */}
      <Nav />

      {/* Movies section */}
      <Movies />
    </div>
  );
}

export default App;
