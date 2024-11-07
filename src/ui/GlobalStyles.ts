import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
   background: ${({ theme }) => theme.body};
   transition: background 0.3s ease;
  }
`;
