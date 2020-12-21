/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

require('assets/icons/weatherIcons/01d.svg');
require('assets/icons/weatherIcons/01n.svg');
require('assets/icons/weatherIcons/02d.svg');
require('assets/icons/weatherIcons/02n.svg');
require('assets/icons/weatherIcons/03d.svg');
require('assets/icons/weatherIcons/03n.svg');
require('assets/icons/weatherIcons/04d.svg');
require('assets/icons/weatherIcons/04n.svg');
require('assets/icons/weatherIcons/09d.svg');
require('assets/icons/weatherIcons/09n.svg');
require('assets/icons/weatherIcons/10d.svg');
require('assets/icons/weatherIcons/10n.svg');
require('assets/icons/weatherIcons/11d.svg');
require('assets/icons/weatherIcons/11n.svg');
require('assets/icons/weatherIcons/13d.svg');
require('assets/icons/weatherIcons/13n.svg');
require('assets/icons/weatherIcons/50d.svg');
require('assets/icons/weatherIcons/50n.svg');

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const CountrySpan = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.white};
  margin-left: 0.5rem;
  text-transform: uppercase;
`;

const CityTitle = styled.h2`
  font-size: 4.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  margin: 0 0 1rem 0;
`;

const Temperature = styled.p`
  font-weight: 300;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.white};
  margin: 0 0 1rem 0;
`;

const WeatherStatus = styled(Temperature)`
  font-size: 2.4rem;
`;

const IconImage = styled.img`
  width: 80px;
  margin-bottom: 1rem;
`;

const CenterImgContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const BasicWeatherInfo = ({ weatherData }) => {
  const imageName = weatherData[0].icon;
  const imageUrl = `/assets/icons/weatherIcons/${imageName}.svg`;
  return (
    <InfoContainer>
      <CityTitle>
        {weatherData[0].city}
        <CountrySpan>{weatherData[0].country}</CountrySpan>
      </CityTitle>
      <Temperature>{weatherData[0].temperature.toFixed(1)}&#8451;</Temperature>
      <CenterImgContainer>
        <IconImage src={window.location.origin + imageUrl} alt="" />
        <WeatherStatus>{weatherData[0].weatherStatus}</WeatherStatus>
      </CenterImgContainer>
    </InfoContainer>
  );
};

BasicWeatherInfo.propTypes = {
  weatherData: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  const { weatherData } = state;
  return { weatherData };
};

export default connect(mapStateToProps)(BasicWeatherInfo);
