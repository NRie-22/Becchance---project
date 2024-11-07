import React from 'react';

import sprite from '../../assets/sprite.svg';
import styled, { css, keyframes, useTheme } from 'styled-components';

interface IconProps {
  name: string;
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
}

interface AnimatedIconProps extends IconProps {
  animName: ReturnType<typeof keyframes>;
  duration: string;
  timingFunction: string;
  fillMode?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  width = '24px',
  height = '24px',
  fill,
  className = '',
}) => {
  const theme = useTheme();
  const fillColor = fill || theme.colors.green[3];

  return (
    <svg width={width} height={height} fill={fillColor} className={className}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export const AnimatedIcon = styled(Icon)<AnimatedIconProps>`
  &.animate {
    animation: ${({ animName, duration, timingFunction, fillMode }) => css`
      ${animName} ${duration} ${timingFunction} ${fillMode || ''}
    `};
  }
`;
