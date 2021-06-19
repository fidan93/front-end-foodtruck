import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from "redux-thunk";
import {reducer} from "../src/reducers/reducer"

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <App className = "container-fluid"/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

