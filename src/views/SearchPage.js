import React from 'react';
import styled from 'styled-components';
import SiteHeader from 'components/atoms/SiteHeader/SiteHeader';
import HomeMain from 'components/organisms/HomeMain';
import Footer from 'components/atoms/Footer/Footer';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SearchPage = () => (
  <Container>
    <SiteHeader />
    <HomeMain />
    <Footer />
  </Container>
);

export default SearchPage;
