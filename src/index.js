import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import FetchTest from "./test/FetchTest";

document.documentElement.style.fontSize = 100/750 + 'vm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //  <App></App>
    <FetchTest></FetchTest>
  // </React.StrictMode>
);


