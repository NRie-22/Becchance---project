import { Icon } from '../Icon';
import {
  ROUTE_ABOUT,
  ROUTE_ACHIEVEMENTS,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PROJECTS,
  ROUTE_SKILLS,
} from '../../constants';

import theme from '../../theme';
import { Nav, StyledNavLink } from './styled';

interface NavLink {
  path: string;
  icon: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: ROUTE_HOME, icon: 'icon-home', label: 'Home' },
  { path: ROUTE_ABOUT, icon: 'icon-user-check', label: 'About me' },
  { path: ROUTE_SKILLS, icon: 'icon-cogs', label: 'Skills' },
  { path: ROUTE_PROJECTS, icon: 'icon-books', label: 'Projects' },
  { path: ROUTE_ACHIEVEMENTS, icon: 'icon-trophy', label: 'Achievements' },
  { path: ROUTE_CONTACT, icon: 'icon-quill', label: 'Contact' },
];

const Navigation = () => (
  <Nav>
    {navLinks.map((item) => (
      <StyledNavLink key={item.path} to={item.path} tooltip={item.label}>
        <Icon
          name={item.icon}
          width='18px'
          height='18px'
          fill={theme.colors.green[10]}
          className='icon-navigation'
        />
      </StyledNavLink>
    ))}
  </Nav>
);

export default Navigation;
