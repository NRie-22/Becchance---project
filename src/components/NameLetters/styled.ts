import styled from 'styled-components';

export const Name = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 50px;
  }
`;

export const Letter = styled('span').withConfig({
  shouldForwardProp: (prop) => prop !== 'isCustom',
})<{ isCustom?: boolean }>`
  font-family: ${({ isCustom }) => (isCustom ? 'Splash' : 'Dancing Script')};
`;
