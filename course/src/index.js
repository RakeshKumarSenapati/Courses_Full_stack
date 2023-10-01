import React from 'react';
import  { createRoot }  from 'react-dom/client';
import App from './App.js';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);