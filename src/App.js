import {useCallback, useEffect, useMemo, useState} from 'react';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Header from './Component/Organisms/Header/index';
import './App.css'
import About from './Component/Molecules/Page/About';
import Home from './Component/Molecules/Page/Home';
import Contact from './Component/Molecules/Page/Contact';




function App() {
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
    
  );
  
}

export default App;
