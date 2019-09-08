import React, { useState } from 'react';

import { Route } from "react-router-dom";//1. import route 


import MovieList from "./Movies/MovieList" //1. loads the movieList component

import Movie from "./Movies/Movie"//1. loads the movie component

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (//2. one route take an id parameter after /movies/
    <div>
      <SavedList list={savedList} />

      <div>

        <Route exact path = "/" component = {MovieList} /> 

        <Route
        path="/movies/:id"
        render = {props => <Movie movies={savedList} {...props} />}
        />

      </div> 
      
    
      
    </div>
  );
};

export default App;
