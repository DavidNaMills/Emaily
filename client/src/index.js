//render route component to dom

import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/App';

const anchor = document.getElementById('root');
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, anchor);

console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE);
console.log(process.env.NODE_ENV);