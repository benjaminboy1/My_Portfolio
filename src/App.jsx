import React from 'react';
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contacts from './components/Contacts';
import Modal from './components/Modal';
import Circly from './components/Circly';
import Foot from './components/Foot';
import circle from "./assets/images/circle.png";



const App = () => {
  return (
    <div className="App">
    <img src={circle} alt="" className="z-20 w-9 absolute left-52 top-32 animate-ping"/>
   
    <img src={circle} alt="" className="z-20 w-9 absolute right-76 bottom-56 animate-ping"/>
    <img src={circle} alt="" className="z-20 w-9 absolute right-10 top-20 animate-ping"/>
    
    <img src={circle} alt="" className="z-20 w-9 absolute right-44 bottom-44 animate-ping"/>
    <img src={circle} alt="" className="z-20 w-9 absolute right-96 top-36 animate-ping"/>
   
    <Navbar />
    <Home />
    <Modal />
    <About />
    <Skills />
    <Projects />
    <Testimonials />
    <Contacts />
    <Circly />
    <Foot />
     
    </div>
  );
}

export default App;
