import React from 'react';
import styled from 'styled-components';

const SiteTitle = styled.h1`
  font-size: 3.6rem;
  color: #ff5f6d;
  text-align: center;

  @media (max-width: 346px) {
    font-size: 2.7rem;
  }
`;

const SiteSubtitle = styled.span`
  font-size: 1.8rem;
  color: #aaa;
  font-weight: 300;
  margin-left: 0.6rem;
`;

const Header = styled.header`
  padding: 4rem 0 3.5rem 0;
`;

const SiteHeader = () => (
  <Header>
    <SiteTitle>
      Clearweather<SiteSubtitle>Pogoda</SiteSubtitle>
    </SiteTitle>
  </Header>
);

export default SiteHeader;
