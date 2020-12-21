/* eslint-disable default-case */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem;

  &:not(last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.black};
  }
`;

const Stat = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
`;

const StatValue = styled(Stat)`
  color: ${({ theme }) => theme.primary};
`;

const StatsRow = (data) => {
  const translatedData = {
    title: data.title,
    value: data.value,
    sunrise: data.sunrise,
    sunset: data.sunset,
  };

  switch (data.title) {
    case 'pressure':
      translatedData.title = 'Ciśnienie';
      translatedData.value = `${data.value} hPa`;
      break;

    case 'wind':
      translatedData.title = 'Prędkość wiatru';
      translatedData.value = `${data.value} m/s`;
      break;

    case 'visibility':
      translatedData.title = 'Widoczność';
      translatedData.value = `${data.value} km`;
      break;

    case 'sunRiseSet':
      if (typeof data.sunrise === 'undefined' && typeof data.sunset === 'undefined') {
        translatedData.title = 'Wschód i zachód slońca';
        translatedData.value = 'b/d | b/d';
      } else {
        const sunriseTime = new Date(data.sunrise * 1000).toLocaleTimeString('pl-PL', {
          hour: '2-digit',
          minute: '2-digit',
        });
        const sunsetTime = new Date(data.sunset * 1000).toLocaleTimeString('pl-PL', {
          hour: '2-digit',
          minute: '2-digit',
        });
        translatedData.title = 'Wschód i zachód slońca';
        translatedData.value = `${sunriseTime} | ${sunsetTime}`;
      }
      break;

    case 'humidity':
      translatedData.title = 'Wilgotność';
      translatedData.value = `${data.value} %`;
      break;

    case 'cloudiness':
      translatedData.title = 'Zachmurzenie';
      translatedData.value = `${data.value} %`;
      break;
  }
  return (
    <ListItem>
      <Stat>{translatedData.title}</Stat>
      <StatValue>{translatedData.value}</StatValue>
    </ListItem>
  );
};

export default StatsRow;
