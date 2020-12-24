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

  @media (max-width: 360px) {
    padding: 2rem 0 1.5rem 0;
  }

  @media only screen and (min-device-width: 375px) and(max-device-width: 700px) and (orientation: landscape) {
    padding: 1rem 0 0.5rem 0;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    padding: 1rem 0 0.5rem 0;
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    padding: 1rem 0 0.5rem 0;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    padding: 1rem 0 0.5rem 0;
  }
`;

const SiteHeader = () => (
  <Header>
    <SiteTitle>
      Clearweather<SiteSubtitle>Pogoda</SiteSubtitle>
    </SiteTitle>
  </Header>
);

export default SiteHeader;
