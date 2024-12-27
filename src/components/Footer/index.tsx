import { getCurrentYear } from '../../helpers';
import { Creator, FooterStyle } from './styled';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <FooterStyle>
      <span>Copyright © {currentYear} </span>
      <Creator href='https://github.com/Roksolyanka'>Roksolana Kushnir</Creator>
    </FooterStyle>
  );
};

export default Footer;
