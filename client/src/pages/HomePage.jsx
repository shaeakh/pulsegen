import React from 'react'
import About from "../components/About";
import Services from "../components/Services";
 import Doctors from "../components/Doctors";
import Blogs from "../components/Blogs";
import Home from "../components/Home";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function HomePage() {
  return (
    <div>
        <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="blog">
          <Blogs />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
