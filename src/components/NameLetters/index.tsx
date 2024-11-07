import React, { FC } from 'react';

import useAnimation from '../../hooks/useAnimation';

import { Letter, Name } from './styled';

interface NameLettersProps {
  name: string;
}

export const NameLetters: FC<NameLettersProps> = ({ name }) => {
  const { activeIndex, animationComplete } = useAnimation(name);

  return (
    <Name>
      {name.split('').map((letter, index) => (
        <Letter
          key={index}
          isCustom={letter === 'R' || letter === 'K'} 
          className={`nameLetter ${
            !animationComplete && (activeIndex === index ? 'active' : '')
          } ${
            !animationComplete &&
            (activeIndex === index - 1 || activeIndex === index + 1
              ? 'neighbor'
              : '')
          }`}
        >
          {letter}
        </Letter>
      ))}
    </Name>
  );
};