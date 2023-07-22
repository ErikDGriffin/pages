import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage } from './home.page';
import FilmsPage from './films.page'; 
import SingleFilmPage from './singlefilm.page'; 

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/films/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
