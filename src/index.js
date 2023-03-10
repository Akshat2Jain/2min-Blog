import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '@lyket/react';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider apiKey="pt_08a3198e20f813a58afba44bd645b8"
    theme={{
      colors: {
        background: "#b8fff3",
        text: "violet",
        primary: "rgba(255, 224, 138, 0.4)"
      }
    }}>
      <App />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
