import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import './index.css'
import Questions from "./components/Questions";
import Answers from "./components/Answers";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>
);
