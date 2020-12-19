import styled from 'styled-components';
import searchIcon from 'assets/icons/magnifying.svg';

const Input = styled.input`
  width: 374px;
  height: 48px;
  background: #fcfcfc;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.17), -4px -4px 6px -1px rgba(255, 255, 255, 0.1);
  background-image: url(${searchIcon});
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: 15px 50%;
  border-radius: 32px;
  border: none;
  outline: none;
  padding: 0 4.5rem 0 4.5rem;
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primary};
`;

export default Input;
