import React from 'react';
import styled from 'styled-components';

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

const LastUpdateBar = () => (
  <UpdateBar>
    <Paragraph>
      Ostatnia aktualizacja pogody<Time>17:25</Time>
    </Paragraph>
  </UpdateBar>
);

export default LastUpdateBar;
