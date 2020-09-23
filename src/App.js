import React from 'react';

import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />

      {/* Nav section */}
      <Nav />
    </div>
  );
}

export default App;
