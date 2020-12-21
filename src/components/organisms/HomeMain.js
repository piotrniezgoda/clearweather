import React from 'react';
import styled from 'styled-components';
import HomeBg from 'components/atoms/HomeBg/HomeBg';
import SearchBox from 'components/molecules/SearchBox/SearchBox';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  bottom: 0;
  padding: 0.5rem 1rem;
`;

const HomeMain = () => (
  <Main>
    <SearchBox />
    <HomeBg />
  </Main>
);

export default HomeMain;
