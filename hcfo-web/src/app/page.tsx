import React from 'react';
import Navbar from '../components/navbar';
import './style.css';


const HomePage: React.FC = () => {
  return (
    <>
    <div>
    <Navbar />
    <div id='spinner'>
    </div>
    </div>
    </>
  );
};

export default HomePage;