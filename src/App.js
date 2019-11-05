import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menubar from './Components/Menubar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Project from './Components/Pages/Projects';
import Skills from './Components/Pages/Skills';
import './App.css';


class App extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Router>
          <React.Fragment>
            <Menubar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Project} />
              <Route path="/skills" component={Skills} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
