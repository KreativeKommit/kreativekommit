import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,{}, composeEnhancers(applyMiddleware()));



ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)