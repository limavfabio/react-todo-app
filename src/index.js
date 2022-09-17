import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './components/TodoContainer';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>
);
