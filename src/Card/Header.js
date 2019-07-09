import React from 'react';
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      Title
    </Container>
  );
}

const Container = styled.div`
  height: 35px;
  background: #0275d8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f7f7f7;
`

export default Header;
