E:\programming\Project\ds_blog\frontend\src\App.js

import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
