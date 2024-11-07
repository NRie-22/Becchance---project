import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
  padding: 0 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding: 0 30px 0 120px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding: 0 40px 0 130px;
  }
`;
