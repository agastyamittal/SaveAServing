import React from 'react';
import ReactDOM from 'react-dom/client';
import './UI/index.css';
import App from './UI/App';
import reportWebVitals from './UI/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
