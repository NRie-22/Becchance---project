import styled from 'styled-components';

export const FooterStyle = styled.footer`
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 0 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding-bottom: 120px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 18px;
    padding: 14px;
  }
`;

export const Creator = styled.a`
  color: ${({ theme }) => theme.textColor};
  transition: color 0.3s ease;
  text-decoration: none;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.hoverColor};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &: hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
