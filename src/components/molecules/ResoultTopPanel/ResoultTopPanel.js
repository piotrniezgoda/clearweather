import React from 'react';
import styled from 'styled-components';
import LinkButton from 'components/atoms/LinkButton/LinkButton';
import BasicWeatherInfo from 'components/atoms/BasicWeatherInfo/BasicWeatherInfo';
import LastUpdateBar from 'components/atoms/LastUpdateBar/LastUpdateBar';
import defaultImage from 'assets/images/default.jpg';

const HeaderTop = styled.header`
  height: 34rem;
  background: url(${({ weatherTheme }) => weatherTheme.weatherTheme || defaultImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  position: relative;
  z-index: 1;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.42);

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  position: absolute;
  top: 5.1rem;
  left: 4rem;
`;

const ResoultTopPanel = (weatherTheme) => (
  <>
    <HeaderTop weatherTheme={weatherTheme}>
      <StyledLinkButton>Powrót</StyledLinkButton>
      <BasicWeatherInfo />
    </HeaderTop>
    <LastUpdateBar />
  </>
);

export default ResoultTopPanel;
