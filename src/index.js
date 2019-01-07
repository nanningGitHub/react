import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';  //引入css文件
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();