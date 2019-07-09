import React from 'react';
import styled from 'styled-components'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function Card() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 300px;
  background: white;

  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-radius: 2px;
  overflow: hidden;
`


export default Card;
