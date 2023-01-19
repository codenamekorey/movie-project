import React from "react";
import MovieCard from "./MovieCard";
const MovieScreen = ({addMovie, movielist, page, setPage, list, removeMovie}) => {
    const movieDisplay = movielist.map((movie, index) => {
        return <MovieCard addMovie={addMovie} movie={movie} list={list} removeMovie={removeMovie}/>;
    })
    const decrement = () => setPage(page - 1);
    const increment = () => setPage(page + 1);
    return(
        <div className="page">
            <h1>Korey's Movie Theatre</h1>
            <h3>Add movie to your watch list</h3>
            <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}
export default MovieScreen;