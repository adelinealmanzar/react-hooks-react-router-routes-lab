import React from "react";

function Movie({ movie }) {
    return (
        <div>
            <title>{movie.title}</title>
            <h3>{movie.time.toString()} minutes</h3>
            <ul>
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    )
}


export default Movie