import React  from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Order from './components/Order';
import Health from './components/Health';
import Footer from './components/Footer';

function App() {
  return (
   <>

       <Navbar />

       <Intro />

       <Order />

       <Health />

       <Footer />

   </>
  );
}

export default App;
