import React from 'react';
import './App.css';
import Home from './home';
import Contact from './contactus';
import About from './aboutus';
import NavBar from './navbar';
import Message from './message';
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  BasicExample = () => (
    <Router>
      <NavBar>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={About} />
        <Route path="/contactus" component={Contact} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/message/:id" component={Message} />
      </NavBar>
    </Router>
  );
  render() {
    return <this.BasicExample />
  }
}

export default App;
