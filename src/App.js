import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from "./pages/About";
import VideoArchive from "./pages/VideoArchive";
import Membership from "./pages/Membership";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

import { Router, Route, Switch } from 'react-router-dom';
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/video-archive'} component={VideoArchive}/>
            <Route path={'/membership'} component={Membership}/>
            <Route path={'/shop'} component={Shop}/>
            <Route path={'/contact'} component={Contact}/>
          </Switch>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
