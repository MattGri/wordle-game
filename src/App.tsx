import React from 'react';
import './App.scss';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <h1 className="title">Wordle</h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
