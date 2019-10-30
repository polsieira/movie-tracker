import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import './index.scss';
import App from './containers/App/App';
import { HashRouter } from 'react-router-dom'
import thunk from 'redux-thunk'


const initialState = { isSignedIn: false }
const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, document.getElementById('root'));

