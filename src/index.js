import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/main.css';
import App from './App';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
