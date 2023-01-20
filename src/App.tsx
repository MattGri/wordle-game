import React, { useState, createContext } from 'react';
import './App.scss';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Words';

interface AppContextProps {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  currentAttempt: {
    attempt: number;
    letterPos: number;
  };
  setCurrentAttempt: React.Dispatch<
    React.SetStateAction<{
      attempt: number;
      letterPos: number;
    }>
  >;
}

export const AppContext = createContext<AppContextProps>({
  board: boardDefault,
  setBoard: () => {},
  currentAttempt: {
    attempt: 0,
    letterPos: 0,
  },
  setCurrentAttempt: () => {},
});

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });

  return (
    <div className="App">
      <nav className="navigation">
        <h1 className="title">Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{ board, setBoard, currentAttempt, setCurrentAttempt }}
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
