import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from "mobx-react";
import store from '~/store';

import App from './components/App';

store.products.load();

ReactDom.render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#app'));
