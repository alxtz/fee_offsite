import React from 'react';
import styled from 'styled-components'

import Card from './Card/index'

function App() {
  return (
    <Container>
      <Card />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e2e1e0;
`

export default App;
