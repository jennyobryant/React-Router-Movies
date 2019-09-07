import React, { useState } from 'react';

import MovieList from "./Movies/MovieList" //1. loads the movieList component


import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
     /* <div>Replace this Div with your Routes</div>*/
    </div>
  );
};

export default App;
