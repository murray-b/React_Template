import ReactDOM from 'react-dom';
import React from 'React';
import App from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
