import React from "react";
import { directors } from "../data";

function Director({ director }) {
  return (
    <div>
      <title>{director.name}</title>
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  )
}

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <Director key={director.name} director={director}/>)}
    </div>
  )
}

export default Directors;
