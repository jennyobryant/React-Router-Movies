import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'; //1. import link 

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (//2. make card in movieList is a link, direct the user to the /movies/{id of movie here}
    <div className="movie-list">
      {movies.map(movie => (
        <Link to = { `/movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
   
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (//when a user click on a movie card they should taken to /movie/{id of movie here} to see the details for the selected movie
    <Link to = { `/movies/${movie.id}`} key = {movie.id}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
        
      ))}
    </div>
    </Link>
  );
}

export default MovieList;
