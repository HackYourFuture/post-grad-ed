import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/navBar/NavBar';
import MainPage from './components/mainPage/MainPage'



function App() {
  return (
    <Router>
      <Route path = "/" exact>
        <div className='container'>
          <NavBar />
          <MainPage />
        </div>
       

      </Route>
    </Router>
   
  );
}

export default App;
