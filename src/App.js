import React from 'react';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Subscribe from './Components/Subscribe';

function App() {
  return (
    <div className="grid grid-cols-1">
      <Nav />
      <Home />
      <About />
      <Gallery />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
