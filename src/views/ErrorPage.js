import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ececec;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3.4rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

const ErrorParagraph = styled.p`
  max-width: 600px;
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ErrorPage = () => (
  <Container>
    <Title>Wystąpił Błąd!</Title>
    <ErrorParagraph>Sprawdź, czy wpisana nazwa miejscowości jest poprawna</ErrorParagraph>
    <ErrorParagraph>
      Jeżeli nazwa miejscowości jest poprawna, to być może nie jest ona dostępna w API pogodowym.
      można spróbować wpisać nazwę sąsiedniej miejscowości
    </ErrorParagraph>
    <Button as={Link} to="/">
      Powrót
    </Button>
  </Container>
);

export default ErrorPage;
