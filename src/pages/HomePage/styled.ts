import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Background = styled.img`
  position: absolute;
  top: -100px;
  z-index: -10;
  color: transparent;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    width: 1440px;
  }
`;

export const TitleH1 = styled.h1`
  text-align: center;
  font-family: 'EB Garamond', serif;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 30px;
  }
`;

export const TextSpecialty = styled.span`
  color: ${({ theme }) => theme.colors.orange[5]};
`;

export const StyledSocial = styled.a`
  .social-icon {
    fill: ${({ theme }) => theme.textColor};
  }

  &:hover .social-icon {
    transform: scale(2);
    transition: transform 0.8s ease, fill 0.8s ease;
    fill: ${({ theme }) => theme.colors.green[4]};
  }

  &:not(:hover) .social-icon {
    transform: scale(1);
    transition: transform 0.8s ease;
  }
`;

export const TextDownload = styled.span`
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-weight: 800;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    font-size: 24px;
  }
`;

export const IconPDF = styled(Icon)`
  fill: ${({ theme }) => theme.textColor};
`;

export const StyledLink = styled(Link)`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};
  text-decoration: none;
  margin: 0 auto;
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

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
    transition: color 0.3s ease, transform 0.3s ease;
    transform: translateX(10px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
  }
`;
