import React from 'react';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import LinkPage from './components/LinkPage';

function App() {
  return (
    <div>

      <header>
        <Header/>
      </header>

      <Router>
        <switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/linkPage/:id' component={LinkPage}/>
        {/* <Route path='/linkPage/topSongs/:id' component={LinkPage}/>
        <Route path='/linkPage/topAlbums/:id' component={LinkPage}/> */}
        </switch>
      </Router>
      
    </div>


  );
}

export default App;
