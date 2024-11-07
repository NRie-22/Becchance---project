import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  ROUTE_ABOUT,
  ROUTE_ACHIEVEMENTS,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_NOT_FOUND,
  ROUTE_PROJECTS,
  ROUTE_SKILLS,
} from '../../constants';

const HomePage = lazy(() => import('../../pages/HomePage'));
const AboutPage = lazy(() => import('../../pages/AboutPage'));
const SkillsPage = lazy(() => import('../../pages/SkillsPage'));
const ProjectsPage = lazy(() => import('../../pages/ProjectsPage'));
const AchievementsPage = lazy(() => import('../../pages/AchievementsPage'));
const ContactPage = lazy(() => import('../../pages/ContactPage'));
const NotFound = lazy(() => import('../../pages/NotFound'));

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  { path: ROUTE_HOME, element: <HomePage /> },
  { path: ROUTE_ABOUT, element: <AboutPage /> },
  { path: ROUTE_SKILLS, element: <SkillsPage /> },
  { path: ROUTE_PROJECTS, element: <ProjectsPage /> },
  { path: ROUTE_ACHIEVEMENTS, element: <AchievementsPage /> },
  { path: ROUTE_CONTACT, element: <ContactPage /> },
  { path: ROUTE_NOT_FOUND, element: <NotFound /> },
];

const RoutesList = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RoutesList;
