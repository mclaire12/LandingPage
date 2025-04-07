// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"; // No missing or extra spaces
import LandingPage from "./components/LandingPage";
import Slider from "./components/Slider";
import TeamSection from "./components/Team";
import Footer from "./components/Footer";
import StatsSection from "./components/StatsSection";
import AboutUs from "./components/AboutUS";
import Contact from "./components/ContactUs";
import PartnersAndTestimonials from "./components/PartnersAndTestimonials";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <LandingPage/>
        <StatsSection/>
               <AboutUs/>
     <TeamSection/>
        <Slider/>
        <PartnersAndTestimonials/>
      <Contact/>
        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;
