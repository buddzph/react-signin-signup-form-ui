import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Navigation from './components/Navigation/Navigation';
import User from './components/User/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/user' component={User} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
