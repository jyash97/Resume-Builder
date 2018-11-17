import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
injectGlobal`
    * {
	font-family: 'Open sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue',
		'Helvetica', 'Arial', sans-serif;
    }
    body {
        margin: 0;
    }
`;

// Enabling Concurrent Mode
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
