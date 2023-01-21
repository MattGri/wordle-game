import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

interface LetterProps {
  letterPosition: number;
  attemptValue: number;
}

const Letter = ({ letterPosition, attemptValue }: LetterProps) => {
  const { board, correctWord, currentAttempt } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord[letterPosition] === letter ? 'correct' : '';
  const almost = !correct && letter !== '' && correctWord.includes(letter);
  const letterState: any =
    currentAttempt.attempt > attemptValue &&
    (correct ? 'correct' : almost ? 'almost' : 'error');

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

export default Letter;
