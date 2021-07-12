import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'));


  registerServiceWorker();


  // import React from 'react';
  // import ReactDOM from 'react-dom';
  // import './index.css';
  // import App from './App';
  // import registerServiceWorker from './registerServiceWorker';
  
  // ReactDOM.render(<App />, document.getElementById('root'));
  // registerServiceWorker();




