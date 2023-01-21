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
  onSelectLetter: (keyVal: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  correctWord: string;
}

export const AppContext = createContext<AppContextProps>({
  board: boardDefault,
  setBoard: () => {},
  currentAttempt: {
    attempt: 0,
    letterPos: 0,
  },
  setCurrentAttempt: () => {},
  onSelectLetter: () => {},
  onDelete: () => {},
  onEnter: () => {},
  correctWord: '',
});

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });

  const correctWord = 'RIGHT';

  const onSelectLetter = (keyVal: string) => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;

    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    });
  };

  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = '';

    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    setCurrentAttempt({
      attempt: currentAttempt.attempt + 1,
      letterPos: 0,
    });
  };

  return (
    <div className="App">
      <nav className="navigation">
        <h1 className="title">Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
        }}
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
