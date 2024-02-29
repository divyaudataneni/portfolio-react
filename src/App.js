import {Component} from 'react'
import { Routes,Route } from 'react-router-dom';

import Profile from './components/Profile'
import About from './components/About';
import './App.css';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Projects from './components/Projects'
import Contact from './components/Contact';


class App extends Component{
  render(){
    return(
    <>
      <Navbar/>
      <Routes>
          <Route path="/" Component= {Profile}/>
          <Route  path="/about" Component={About}/>
          <Route path='/education' Component={Education}/>
          <Route path="/projects"  Component={Projects}/>
      </Routes>
      <Contact/>
       
      </>
    );
    
  }
}

export default App;
