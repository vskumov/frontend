import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { rootReducer } from './reducers';
import { compose, createStore } from "redux";
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";


const composeEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEn(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);