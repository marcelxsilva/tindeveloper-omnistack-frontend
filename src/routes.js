import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';

export default function Routes() {
  return (
    <BrowserRouter >
      <Switch >
        <Route exact path="/" component={Login} loading="ola"/>
        <Route path="/user/:user" component={Dashboard} />
        <Route path="/" redirect component={Login} />
      </Switch>
    </BrowserRouter >
  );
}