import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Image from './components/svgimg/svgimg';
import Middle from './components/middle/Middle';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Image />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
