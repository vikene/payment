import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from "./components/home/home";

ReactDOM.render(<Home />, document.getElementById('root'));


serviceWorker.unregister();
