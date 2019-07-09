import React from 'react';
import styled from 'styled-components'

import SecondHeader from './SecondHeader'
import Table from './Table'

class Content extends React.Component {
  state = {
    isSecondHeaderHidden: false
  }

  render() {
    return (
      <Container>
        <SecondHeader
          isHidden={this.state.isSecondHeaderHidden}
          onClickHide={ () => this.setState({ isSecondHeaderHidden: true }) }
        />
        <Title>TOP TERMS</Title>
        <Table />
      </Container>
    )
  }
}

const Container = styled.div`
  height: 230px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 13px;
  color: gray;
  font-weight: 600;
  padding: 5px 10px;
`

export default Content;
