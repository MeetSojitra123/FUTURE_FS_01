import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2025 Your Name. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;