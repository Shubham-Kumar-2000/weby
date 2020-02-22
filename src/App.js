import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import home from './home';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter 
basename={process.env.PUBLIC_URL}>
 <Switch>
    <Route path='/' component={home}/>   
   </Switch>
</BrowserRouter>
              </div>
  );
}

export default App;
