import React from 'react';

interface LetterProps {
  letterPosition: number;
  attemptValue: number;
}

const Letter = ({ letterPosition, attemptValue }: LetterProps) => {
  return <div className="letter">Letter</div>;
};

export default Letter;
