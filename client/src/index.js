import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"; //1. wrap app with the router

import './index.css';
import App from './App';

ReactDOM.render( //1. wrap app with the router
<Router>
   <App />
</Router>, 
document.getElementById('root')

);
