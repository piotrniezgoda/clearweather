import React from 'react';
import styled from 'styled-components';
import cloudyIco from 'assets/icons/cloudy.svg';

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

const BasicWeatherInfo = () => (
  <InfoContainer>
    <CityTitle>
      chicago<CountrySpan>usa</CountrySpan>
    </CityTitle>
    <Temperature>20&#8451;</Temperature>
    <div>
      <img src={cloudyIco} alt="" />
      <WeatherStatus>Cloudy</WeatherStatus>
    </div>
  </InfoContainer>
);

export default BasicWeatherInfo;
