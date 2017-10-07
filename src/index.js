import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './containers/App';
import rootReducer from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

const node = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(node, document.getElementById('root'));
// registerServiceWorker();
