import React from 'react';
import {Route} from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import Dashboard from './containers/Dashboard/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path = "/" exact render = {() => <Home />} />
        <Route path = "/dashboard" render = {() => <Dashboard />} />
      </Layout>
    </div>
  );
}

export default App;
