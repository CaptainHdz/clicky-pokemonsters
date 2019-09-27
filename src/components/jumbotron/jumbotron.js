import React from 'react';
import './style.css';

function Jumbotron() {
    return (
        <div className="jumbotron mt-5 jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center text-light title font-weight-bold">PokeMemory!</h1>
    <p className="lead text-center text-light rules">To Win The Game, Click On All The Images Only Once. Click An Image More Than Once And You'll Start Over!</p>
  </div>
        </div>
    )
    
}

export default Jumbotron;