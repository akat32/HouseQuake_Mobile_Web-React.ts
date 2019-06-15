import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import { LoginPage, Signup } from '../component/page/index'
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path = '/' component = {LoginPage} />
        <Route exact path = '/signup' component = {Signup} />
      </Router>
    </div>
  );
}

export default App;
