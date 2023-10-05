import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootReducer from './reducers';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import "../src/style.css"


const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

