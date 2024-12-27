import React, { useState } from 'react';

import { NameLetters } from '../../components/NameLetters';
import { Icon } from '../../components/Icon';
import Code from '../../components/Code';
import Toggler from '../../components/Toggler';
import { ROUTE_ABOUT } from '../../constants';

import cv from '../../assets/files/cv.pdf';
import coverLetter from '../../assets/files/cover_letter.pdf';
import background from '../../assets/background.svg';

import theme from '../../theme';
import { FlexBox, GridColumns } from '../../ui';
import {
  Background,
  HomeSection,
  StyledLink,
  StyledSocial,
  TextSpecialty,
  TitleH1,
} from './styled';

const HomePage = () => {
  const [togglePosition, setTogglePosition] = useState(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = togglePosition ? cv : coverLetter;
    link.download = togglePosition
      ? 'Roksolana_Kushnir_CV.pdf'
      : 'Roksolana_Kushnir_Cover_Letter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HomeSection>
      <Background
        alt='Hero'
        loading='lazy'
        width='1572'
        height='620'
        decoding='async'
        src={background}
      ></Background>
      <GridColumns
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
        gap='16px'
        width='100%'
      >
        <FlexBox
          flexDirection='column'
          justifyContent='center'
          width='100%'
          maxWidth={['100%', '100%', '100%', '600px', '700px']}
          order={[2, 2, 2, 1, 1]}
          margin={[0, 0, 0, 'auto']}
          padding={[0, 0, '0 0 16px 0', 0]}
        >
          <TitleH1>
            Hello, this is <br />
            <NameLetters name='Roksolana Kushnir' /> <br />
            I'm a <TextSpecialty>Frontend Developer</TextSpecialty>
          </TitleH1>
          <FlexBox justifyContent='center' gap='20px' margin='18px 0'>
            <StyledSocial target='_blank' href='https://github.com/Roksolyanka'>
              <Icon
                name='icon-github'
                width='30px'
                height='30px'
                fill={theme.colors.browns[9]}
                className='social-icon'
              />
            </StyledSocial>
            <StyledSocial
              target='_blank'
              href='https://www.linkedin.com/in/roksolanakushnir/'
            >
              <Icon
                name='icon-linkedin-circle'
                width='30px'
                height='30px'
                fill={theme.colors.browns[9]}
                className='social-icon'
              />
            </StyledSocial>
            <StyledSocial target='_blank' href='https://t.me/Roksolanakushnir'>
              <Icon
                name='icon-telegram'
                width='30px'
                height='30px'
                fill={theme.colors.browns[9]}
                className='social-icon'
              />
            </StyledSocial>
          </FlexBox>
          <Toggler
            togglePosition={togglePosition}
            setTogglePosition={setTogglePosition}
            handleDownload={handleDownload}
            cvHref={cv}
            coverLetterHref={coverLetter}
          />
          <StyledLink to={ROUTE_ABOUT}>About me &#10174;</StyledLink>
        </FlexBox>
        <Code />
      </GridColumns>
    </HomeSection>
  );
};

export default HomePage;
