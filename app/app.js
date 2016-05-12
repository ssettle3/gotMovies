import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Movies from './movies';
var dotenv = require('dotenv');
dotenv.load();

ReactDOM.render( <Header/>, document.getElementById('header') );
ReactDOM.render( <Movies/>, document.getElementById('movies-list') );
