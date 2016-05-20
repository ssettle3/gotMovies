import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Movies from './movies';
import {env} from './config';

ReactDOM.render( <Header/>, document.getElementById('header') );
ReactDOM.render( <Movies env={env}/>, document.getElementById('movies-list') );
