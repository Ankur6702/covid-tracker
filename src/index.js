import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './styles/GlobalStyle';

ReactDOM.render(
  <div>
    <GlobalStyled />
    <App />
  </div>,
  document.getElementById('root')
);
