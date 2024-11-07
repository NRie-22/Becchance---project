import React from 'react';
import { Bars } from 'react-loader-spinner';

import { FlexBox } from '../../ui';
import theme from '../../theme';

const Loader = () => {
  return (
    <FlexBox
      justifyContent='center'
      alignItems='center'
      height='100vh'
      width='100vw'
      top='0'
      left='0'
      position='fixed'
    >
      <Bars
        height={80}
        width={80}
        color={theme.colors.green[3]}
        ariaLabel='bars-loading'
        visible={true}
      />
    </FlexBox>
  );
};

export default Loader;
