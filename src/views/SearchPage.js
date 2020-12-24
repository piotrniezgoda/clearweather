import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SiteHeader from 'components/atoms/SiteHeader/SiteHeader';
import HomeMain from 'components/organisms/HomeMain';
import Footer from 'components/atoms/Footer/Footer';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SearchPage = () => (
  <motion.div
    exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
    animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
  >
    <Container>
      <SiteHeader />
      <HomeMain />
      <Footer />
    </Container>
  </motion.div>
);

export default SearchPage;
