import { Link } from 'react-router-dom';

import ThemeToggler from '../ThemeToggler';
import { HeaderStyle, Logo } from './styled';

const Header = () => {
  return (
    <HeaderStyle>
      <Logo as={Link} to='./'>
      NR
      </Logo>
      <ThemeToggler />
    </HeaderStyle>
  );
};

export default Header;
