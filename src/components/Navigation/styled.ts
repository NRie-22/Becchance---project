import { NavLink, NavLinkProps } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface StyledNavLinkProps extends NavLinkProps {
  tooltip: string;
}

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  max-width: fit-content;
  padding: 5px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.boxShadowNav};
  backdrop-filter: blur(2px);
  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    z-index: -1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    flex-direction: column;
    max-height: fit-content;
    top: 50%;
    left: 5%;
  }
`;

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.green[10]};
  text-decoration: none;
  padding: 12px;
  border-radius: 50px;
  transition: color 0.3s, background 0.7s ease-in-out;

  &.active .icon-navigation {
    fill: ${({ theme }) => theme.colors.green[7]};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green[0]};
    background: ${({ theme }) => theme.colors.green[4]};
    animation: ${hoverAnimation} 0.7s ease forwards;
  }

  &:hover .icon-navigation {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }

  &:not(:hover) {
    background: transparent;
  }

  &:not(:hover) .icon-navigation {
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  &::after {
    content: attr(tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    font-family: 'EB Garamond', serif;
    font-weight: 400;
    font-size: 12px;
    background-color: ${({ theme }) => theme.colors.green[10]};
    color: ${({ theme }) => theme.colors.green[0]};
    padding: 5px;
    border-radius: 5px;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transform: translateX(-50%);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    padding: 13px;

    .icon-navigation {
      width: 24px;
      height: 24px;
    }

    &::after {
      font-size: 14px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    &::after {
      bottom: 80%;
      left: 80%;
      transform: translate(20%, 20px);
    }

    &:hover::after {
      transform: translate(5%, 0px);
      transition: transform 2s ease;
    }
  }
`;
