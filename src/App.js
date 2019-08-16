import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menubar from './Components/Menubar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Project from './Components/Pages/Projects';
import Skills from './Components/Pages/Skills';
import Footer from './Components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <div>
            <Menubar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Project} />
            <Route path="/skills" component={Skills} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
