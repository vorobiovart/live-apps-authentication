import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

window.renderAuth = (containerId, history) => {
    ReactDOM.render(<App history={history} />, document.getElementById(containerId));
};

window.unmountAuth = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
