import { useState } from 'react';

import { useTheme } from '../../hooks/useTheme';

import theme from '../../theme';
import { appear, ThemeTogglerButton } from './styled';
import { AnimatedIcon } from '../Icon';

const ThemeToggler = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <ThemeTogglerButton
      type='button'
      role='switch'
      aria-label='theme mode switch'
      onClick={handleToggleTheme}
    >
      <AnimatedIcon
        className={isAnimating ? 'animate' : ''}
        name={isDarkTheme ? 'icon-sun-fill' : 'icon-moon-fill'}
        width='30px'
        height='30px'
        fill={isDarkTheme ? theme.colors.green[3] : theme.colors.green[7]}
        animName={appear}
        duration='0.5s'
        timingFunction='ease'
        fillMode='forwards'
      />
    </ThemeTogglerButton>
  );
};

export default ThemeToggler;
