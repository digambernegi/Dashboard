import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { DarkModeProvider } from './context/darkModeContext';

ReactDOM.render(
  <BrowserRouter>
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
