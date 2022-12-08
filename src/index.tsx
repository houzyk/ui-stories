import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const init = document.getElementById('root') as HTMLElement;

if (init) {
  const root = ReactDOM.createRoot(init);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


