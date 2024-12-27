import React from 'react';

import avatar from '../../assets/images/avatar.jpg';
import avatar2x from '../../assets/images/avatar-2x.jpg';
import { PersonalPhoto } from './styled';

const AboutPage = () => {
  return (
    <div>
      <PersonalPhoto
        alt='Roksolana Kushnir'
        width={1000}
        height={1000}
        loading='lazy'
        decoding='async'
        src={avatar}
        srcSet={`${avatar} 1x, ${avatar2x} 2x`}
      />
    </div>
  );
};

export default AboutPage;
