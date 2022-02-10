import React from "react";
import { actors } from "../data";


function Actor({ actor }) {
  return (
    <div>
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  )
}

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <Actor key={actor.name} actor={actor}/>)}
    </div>
  )
}

export default Actors;
