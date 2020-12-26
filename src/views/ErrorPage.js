import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  <motion.div
    exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
    animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
    transition={{ type: 'tween', duration: 0.4 }}
  >
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
  </motion.div>
);

export default ErrorPage;
