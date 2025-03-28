// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"; // No missing or extra spaces
import LandingPage from "./components/LandingPage";
import Slider from "./components/Slider";
import TeamSection from "./components/Team";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <LandingPage/>
     <TeamSection/>
        <Slider/>
        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;
