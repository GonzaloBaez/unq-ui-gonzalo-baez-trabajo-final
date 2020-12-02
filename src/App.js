
import React, {useState,useEffect} from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import VsApp from './VsApp'
import Home from './Home'
import JvJ from './JvJ'


function App() {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/vsApp" component={VsApp}/>
          <Route path="/JvJ" component={JvJ}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>

   </> 
  );
}

export default App;
