import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatsRow from 'components/atoms/StatsRow/StatsRow';

const MainContainer = styled.main`
  max-width: 50rem;
  margin: 5rem auto 0 auto;
  padding: 1rem 0 4rem 0;
`;

const StatsList = ({ weatherData }) => {
  const { detailWeather } = weatherData[0];
  return (
    <MainContainer>
      <ul>
        <StatsRow title="pressure" value={detailWeather.pressure} />
        <StatsRow title="wind" value={detailWeather.wind} />
        <StatsRow title="visibility" value={detailWeather.wind} />
        <StatsRow
          title="sunRiseSet"
          sunrise={detailWeather.sunrise}
          sunset={detailWeather.sunset}
        />
        <StatsRow title="humidity" value={detailWeather.humidity} />
        <StatsRow title="cloudiness" value={detailWeather.cloudiness} />
      </ul>
    </MainContainer>
  );
};

StatsList.propTypes = {
  weatherData: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  const { weatherData } = state;
  return { weatherData };
};

export default connect(mapStateToProps)(StatsList);
