import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

interface LetterProps {
  letterPosition: number;
  attemptValue: number;
}

const Letter = ({ letterPosition, attemptValue }: LetterProps) => {
  const { board } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  return <div className="letter">{letter}</div>;
};

export default Letter;
