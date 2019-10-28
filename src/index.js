import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import thunk from 'redux-thunk'


const initialState = {isSignedIn: false}
const store = createStore(rootReducer, initialState,compose(applyMiddleware(thunk), composeWithDevTools()));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
