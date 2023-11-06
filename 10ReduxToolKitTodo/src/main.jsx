// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main 'App' component from './App.jsx'
import App from './App.jsx';

// Import styles from './index.css'
import './index.css';

// Import the 'Provider' component from 'react-redux' to enable Redux integration
import { Provider } from 'react-redux';

// Import the Redux store from './app/store'
import { store } from './app/store';

// Use 'ReactDOM.createRoot' to render the app on the element with the 'root' id
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the 'App' component with the Redux 'Provider' to provide access to the store
  <Provider store={store}>
    <App />
  </Provider>
);
