import React from 'react';
import Sidenav from './components/sidenav';

import './App.css';
import Router from './router';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Router/>
    </div>
  );
}

export default App;
