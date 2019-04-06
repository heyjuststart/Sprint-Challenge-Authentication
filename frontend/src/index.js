import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import Reset from './Reset';

const FullHeight = createGlobalStyle`
  html,body, #root {
    height: 100%;
  }
`;

ReactDOM.render(
  <Router>
    <FullHeight />
    <Reset />
    <App />
  </Router>,
  document.getElementById('root')
);
