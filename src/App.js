import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Work from "./component/Projects/Work/Work";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/footer";
import Banner from "./component/Banner/Banner";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
