import React from 'react';

// React's library for handling direct DOM interaction (vs. Virual DOM interaction),
// render alows us to place our React app into the DOM
import { render } from 'react-dom';

// Base of react app
import App from './App';

// styling
import './index.css';


const rootHtmlElement = document.getElementById('root');

render((
  <App />
), rootHtmlElement);
