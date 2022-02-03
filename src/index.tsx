import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './components/App';
import AppRouter from './router/AppRouter';



ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);


