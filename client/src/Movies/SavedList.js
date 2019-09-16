import React from 'react';

import { Link } from 'react-router-dom'; //import link

const SavedList = props => ( //ad link surround the div classname "Home"
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to = { `/`}> 
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
