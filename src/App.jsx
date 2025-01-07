import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import Layerblur from './components/Layerblur/Layerblur';
import Layerblur2 from './components/Layerblur/Layerblur2';
import Socialmedia from './components/Socialmedia/Socialmedia';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Footer from './components/Footer/Footer';

const App = () => {
  React.useEffect(()=> {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return ( 
  <div>
    <Navbar/>
    <Hero/>
    <Layerblur/>
    <Socialmedia/>
    <Project/>
    <Skill/>
    <ContactInfo/>
    <Layerblur2/>
    <Footer/>
  </div>
  );
};

export default App;
