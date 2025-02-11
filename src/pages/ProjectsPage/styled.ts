import styled from 'styled-components';

export const ProjectsSection = styled.section`
  display: flex;
  gap: 10px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    padding: 0 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    padding: 0 100px;
  }
`;