import React from 'react';
import ReactDOM from 'react-dom';
// import history from 'helpers/history'
// import ApiClient from 'helpers/ApiClient'
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

//const client = new ApiClient()
export const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
