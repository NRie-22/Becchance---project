import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px) saturate(100%);
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    padding: 14px 120px;
  }
`;

export const Logo = styled.a`
  font-family: 'Splash', cursive;
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.accentColor};
`;
