import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'
import Home from './Home'
import { HashRouter, Route } from "react-router-dom";
import Clearance from './Clearance';
import Refurbished from './Refurbished';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <NavBar />
          <div className="Main">
            <Route exact path="/" component={Home} />
            <Route exact path="/clearance" component={Clearance} />
            <Route exact path="/refurbished" component={Refurbished} />
          </div>
          <Footer /> 
        </div>
      </HashRouter>
    );
  }
}

export default App;
