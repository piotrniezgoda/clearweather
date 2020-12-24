/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import './animationStyle.css';
import { addData as addDataAction } from 'redux/actions';

const SearchContainer = styled.div`
  max-width: 100%;
  width: 67.4rem;
  height: 32.1rem;
  background: linear-gradient(
    180.49deg,
    rgba(255, 255, 255, 0.8) 38.61%,
    rgba(255, 255, 255, 0.17) 98.37%
  );
  padding: 2rem;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.25);
  position: relative;

  @media (max-width: 360px) {
    height: 24.1rem;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    width: 48.4rem;
    height: 22.1rem;
  }

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    width: 48.4rem;
    height: 22.1rem;
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    width: 48.4rem;
    height: 22.1rem;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    height: 18.1rem;
  }
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

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    margin-top: 1rem;
  }
`;

const ErrorMsg = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 1.7rem;
  text-align: center;
  position: absolute;
  bottom: 3rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: #ff2c2c;
  padding: 1rem;
  border-radius: 10px;
`;

const SearchBox = ({ addData }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoaded, changeIsLoaded] = useState(false);
  const [isInvalidValue, changeIsInvalidValue] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const apikey = '8bf066e8c144add877cf52ce8de3e9bf';

    if (inputValue !== 'null' && typeof inputValue !== 'undefined' && inputValue !== '') {
      changeIsLoaded(true);
      fetch(
        `//api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apikey}&lang=pl&units=metric`,
      )
        // eslint-disable-next-line consistent-return
        .then((response) => {
          if (response.status === 200) {
            return response.json();
            // eslint-disable-next-line no-else-return
          } else {
            throw new Error('something went wrong: 404');
          }
        })
        .then((data) => {
          changeIsLoaded(false);
          addData(data);
          history.push('/weather');
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          history.push('/error');
        });
    } else {
      changeIsInvalidValue(true);
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <SearchContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <Label htmlFor="search">Gdzie chcesz sprawdzić pogodę?</Label>
          <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            autoComplete="off"
            id="search"
          />
        </div>
        <StyledButton>Szukaj</StyledButton>
        {isLoaded && (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {isInvalidValue && <ErrorMsg>Wprowadź nazwe miasta!</ErrorMsg>}
      </Form>
    </SearchContainer>
  );
};

SearchBox.propTypes = {
  addData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addData: (data) => dispatch(addDataAction({ type: 'ADD_DATA', payload: data })),
});

export default connect(null, mapDispatchToProps)(SearchBox);
