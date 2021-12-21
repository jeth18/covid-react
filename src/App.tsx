import React from 'react';
import Sidenav from './components/sidenav';
import Cases from './pages/cases';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Cases/>
    </div>
  );
}

export default App;
