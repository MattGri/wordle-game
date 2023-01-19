import React, { useState, createContext } from 'react';
import './App.scss';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Words';

interface AppContextProps {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
}

export const AppContext = createContext<AppContextProps>({
  board: boardDefault,
  setBoard: () => {},
});

function App() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <nav className="navigation">
        <h1 className="title">Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
