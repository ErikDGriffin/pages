import React, { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "./helpers/film.helpers";
import { Link } from "react-router-dom";
import { getFilmStats } from "./helpers/film.helpers";

function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFilmsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");
 
  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="form-group">
          <label htmlFor="searchDirector">Filter by Director:</label>
          <select
            id="searchDirector"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All Directors</option>
            {directors.map((director, index) => (
              <option key={director + index} value={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div>
        </div>
      <ul>
        {list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>

      <div>
        <ul>
          {filmsByDirector.map((film) => {
            return <li key={film.id}>{film.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default FilmsPage;



