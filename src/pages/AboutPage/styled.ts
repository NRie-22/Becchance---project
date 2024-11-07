import styled from 'styled-components';

export const PersonalPhoto = styled.img`
  width: fit-content;
  height: 260px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.blue[8]};
  box-shadow: ${({ theme }) => theme.colors.boxShadow[3]};
  color: transparent;
  float: right;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    height: 220px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    height: 265px;
  }
`;
