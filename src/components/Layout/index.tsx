import React, { Suspense } from 'react';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';

import { Main } from './styled';
import { FlexBox } from '../../ui';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <FlexBox flexDirection='column' minHeight='100vh'>
    <Header />
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Main>{children}</Main>
    </Suspense>
    <Footer />
  </FlexBox>
);

export default Layout;
