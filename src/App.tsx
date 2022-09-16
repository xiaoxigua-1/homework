import React from 'react';
import Nav from './nav';
import About from './about';
import { Outlet } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
