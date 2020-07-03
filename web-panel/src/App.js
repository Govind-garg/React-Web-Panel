import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Task from './components/Task/Task';
import User from './components/User/User';
import Protected from './components/Login/Protected';
import Login from './components/Login/LoginPage/Login';
import Navbar from './components/NavBar/NavBar';


function App() {
  return (
    <Router>
          <Navbar />
          <Protected exact path="/user" component={User} />
          <Protected exact path="/" component={Home} />
          <Protected exact path="/task" component={Task} />
          <Route path="/login" component={Login}  />
      </Router>
  );
}

export default App;
