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

const StatsRow = () => (
  <ListItem>
    <Stat>Ciśnienie</Stat>
    <StatValue>1027 hPa</StatValue>
  </ListItem>
);

export default StatsRow;
