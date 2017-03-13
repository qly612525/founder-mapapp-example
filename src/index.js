import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';

import App from './templates/default.app';

const root = document.createElement('div');
root.style.width = '100%';
root.style.height = '100%';
document.body.appendChild(root);

ReactDom.render(
    <App />,
    root
);
