import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Dashboard from '../src/components/Dashboard';
import Login from '../src/components/Login';
import Preferences from '../src/components/Preferences';

import useToken from '../src/customHooks/useToken.js';

function App() {
  const  { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={ setToken } />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;