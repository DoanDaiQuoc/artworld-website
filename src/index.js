import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Home/Header';
import reportWebVitals from './reportWebVitals';
import Session2 from './components/Home/Session2';
import Session3 from './components/Home/Session3';
import Session4 from './components/Home/Session4';
import Session5 from './components/Home/Session5';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Session2 />
    <Session3 />
    <Session4 />
    <Session5 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
