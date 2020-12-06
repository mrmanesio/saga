import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import App from './App';
import {rootReducer} from './redux/rootReducer'
import {Provider} from 'react-redux'

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
