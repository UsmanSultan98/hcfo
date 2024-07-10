import React from 'react';
import Navbar from '../components/navbar';
import Home from '../components/home';
import About from '../components/about';
import Footer from '../components/footer';
import './style.css';


const HomePage: React.FC = () => {
  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Footer />
    </div>
    </>
  );
};

export default HomePage;