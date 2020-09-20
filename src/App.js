import React from 'react';
import './App.css';
import Cv from './components/cv/cv-page/Cv';
import Intro from './components/intro-page/Intro';
function App() {
  return (
    <div className="App">
      <Intro/>  
      <Cv />
    </div>
  );
}

export default App;
