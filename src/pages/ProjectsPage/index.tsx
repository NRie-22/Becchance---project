import React from 'react';

import background from '../../assets/background.svg';
import projectsData from '../../data/projects';
import { ROUTE_ACHIEVEMENTS } from '../../constants';

import { Background, StyledLink } from '../../ui';
import { ProjectsSection } from './styled';
import { TitleH2 } from '../SkillsPage/styled';
import Projects from '../../components/Projects';

const ProjectsPage = () => (
  <ProjectsSection aria-label='about section'>
    <Background
      alt='Hero'
      loading='lazy'
      width='1572'
      height='620'
      decoding='async'
      src={background}
    />
    <TitleH2>
      Here's a glimpse into some of the projects I've had the pleasure of
      working on:
    </TitleH2>
    <Projects projects={projectsData} />
    <StyledLink to={ROUTE_ACHIEVEMENTS}>My achievements &#10174;</StyledLink>
  </ProjectsSection>
);

export default ProjectsPage;
