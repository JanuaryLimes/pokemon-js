import '../node_modules/pokemon-font/css/pokemon-font.css';
import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import Font from './components/Font'
import Game from './containers/Game';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Font />, document.getElementById('font'))
ReactDOM.render(<Game />, document.getElementById('pokemon'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
