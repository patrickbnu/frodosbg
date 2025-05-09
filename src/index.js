import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Table from './Table';
import App from './App';

import AppAcervo from './AppAcervo';
import * as serviceWorker from './serviceWorker';


import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render((
    <Provider store={store}>
        <AppAcervo />
    </Provider>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
