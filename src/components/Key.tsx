import React, { useContext } from 'react';
import { AppContext } from '../App';

interface KeyProps {
  keyVal: string;
  bigKey?: boolean;
}

const Key = ({ keyVal, bigKey }: KeyProps) => {
  const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter();
    } else if (keyVal === 'DELETE') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="key" id={bigKey ? 'big' : ''} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

export default Key;
