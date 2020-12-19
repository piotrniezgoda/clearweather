import React from 'react';
import styled from 'styled-components';

const HomeFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 125.4rem;
  max-width: 100%;
  transform: translateX(-50%);
  background: transparent;
  border-top: 1px solid ${({ theme }) => theme.grey};
  text-align: center;
  padding: 3.5rem 0.5rem;
`;

const FooterParagraph = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.grey};
  margin: 0;
`;

const Footer = () => (
  <HomeFooter>
    <FooterParagraph>2020</FooterParagraph>
    <FooterParagraph>Code&Design Piotr Niezgoda</FooterParagraph>
  </HomeFooter>
);

export default Footer;
