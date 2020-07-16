import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import combinedReducers from './reducers'
import applyMiddlwares from './middlewares'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'

AOS.init();//initializing lib for animations 
const store = createStore(combinedReducers,applyMiddlwares);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

