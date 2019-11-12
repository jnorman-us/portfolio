import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Desktop from './Desktop.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/page.css';

ReactDOM.render(<Desktop />, document.getElementById('root'));
serviceWorker.unregister();
