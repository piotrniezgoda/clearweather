import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const SearchContainer = styled.div`
  max-width: 100%;
  width: 67.4rem;
  height: 32.1rem;
  background: hsla(0, 0%, 100%, 0.39);
  padding: 2rem;
  border-radius: 30px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.dark};
  display: block;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin-top: 4.4rem;
`;

const SearchBox = () => (
  <SearchContainer>
    <Form>
      <div>
        <Label for="search">Gdzie chcesz sprawdzić pogodę?</Label>
        <Input autocomplete="off" id="search" />
      </div>
      <StyledButton>Szukaj</StyledButton>
    </Form>
  </SearchContainer>
);

export default SearchBox;
