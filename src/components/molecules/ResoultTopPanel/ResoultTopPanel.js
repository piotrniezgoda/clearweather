import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LinkButton from 'components/atoms/LinkButton/LinkButton';
import BasicWeatherInfo from 'components/atoms/BasicWeatherInfo/BasicWeatherInfo';
import LastUpdateBar from 'components/atoms/LastUpdateBar/LastUpdateBar';
import defaultImage from 'assets/images/default.jpg';
import cloudImage from 'assets/images/clouds.jpg';
import clearSkyImage from 'assets/images/clearsky.jpg';
import fogImage from 'assets/images/fog.jpg';
import rainImage from 'assets/images/rain.jpg';
import snowImage from 'assets/images/snow.jpg';
import stormImage from 'assets/images/storm.jpg';

const HeaderTop = styled.header`
  height: 34rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  background-image: url(${({ headerImage }) => headerImage});
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
  text-decoration: none;

  @media (max-width: 600px) {
    top: 2.1rem;
  }
`;

// eslint-disable-next-line no-unused-vars
const ResoultTopPanel = ({ weatherData }) => {
  const { weatherType } = weatherData[0];
  let headerImage;

  switch (weatherType) {
    case 'Clouds':
      headerImage = cloudImage;
      break;
    case 'Rain':
      headerImage = rainImage;
      break;
    case 'Clear':
      headerImage = clearSkyImage;
      break;
    case 'Snow':
      headerImage = snowImage;
      break;
    case 'Fog':
    case 'Mist':
    case 'Smoke':
    case 'Haze':
      headerImage = fogImage;
      break;
    case 'Thunderstorm':
      headerImage = stormImage;
      break;

    default:
      headerImage = defaultImage;
  }

  return (
    <>
      <HeaderTop style={{ backgroundImage: `url(${headerImage})` }}>
        <StyledLinkButton as={Link} to="/">
          Powrót
        </StyledLinkButton>
        <BasicWeatherInfo />
      </HeaderTop>
      <LastUpdateBar />
    </>
  );
};

ResoultTopPanel.propTypes = {
  weatherData: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  const { weatherData } = state;
  return { weatherData };
};

export default connect(mapStateToProps)(ResoultTopPanel);
