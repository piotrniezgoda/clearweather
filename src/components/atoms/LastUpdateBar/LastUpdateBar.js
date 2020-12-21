import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UpdateBar = styled.div`
  background: ${({ theme }) => theme.softGrey};
  padding: 2.7rem 1rem;
`;
const Paragraph = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  text-align: center;
`;

const Time = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  margin-top: 1rem;
`;

const LastUpdateBar = ({ weatherData }) => {
  const unixTime = weatherData[0].weatherUpdate;

  const time = new Date(unixTime * 1000).toLocaleTimeString('pl-PL');
  return (
    <UpdateBar>
      <Paragraph>
        Ostatnia aktualizacja pogody<Time>{time}</Time>
      </Paragraph>
    </UpdateBar>
  );
};

LastUpdateBar.propTypes = {
  weatherData: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  const { weatherData } = state;
  return { weatherData };
};

export default connect(mapStateToProps)(LastUpdateBar);
