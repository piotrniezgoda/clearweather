import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 0;
  background-color: #ff5f6d;
  width: 128px;
  height: 40px;
  border: none;
  border-radius: 50px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.6rem;
  text-transform: capitalize;
  box-shadow: -4px -4px 9px -4px rgba(255, 255, 255, 0.19), 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  outline: none;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background: #ff2617;
    transition: all 0.3s;
    box-shadow: -4px -4px 9px -4px rgba(255, 255, 255, 0.19), 4px 4px 4px rgba(255, 38, 23, 0.55);
  }
`;

export default Button;
