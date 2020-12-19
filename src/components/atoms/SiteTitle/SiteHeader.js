import React from 'react';
import styled from 'styled-components';

const SiteTitle = styled.h1`
  font-size: 3.6rem;
  color: #ff5f6d;
  text-align: center;
`;

const SiteSubtitle = styled.span`
  font-size: 1.8rem;
  color: #aaa;
  font-weight: 300;
  margin-left: 0.6rem;
`;

const SiteHeader = () => (
  <header>
    <SiteTitle>
      Clearweather<SiteSubtitle>Pogoda</SiteSubtitle>
    </SiteTitle>
  </header>
);

export default SiteHeader;
