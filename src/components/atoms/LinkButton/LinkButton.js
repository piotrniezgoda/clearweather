import styled from 'styled-components';
import arrow from 'assets/icons/arrow.svg';

const LinkButton = styled.a`
  color: ${({ theme }) => theme.white};
  background: url(${arrow});
  background-repeat: no-repeat;
  padding: 0.5rem 0 0.5rem 3.5rem;
  cursor: pointer;
  background-position: 0 50%;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.white};
  }
`;

export default LinkButton;
