import React from 'react';
import styled from 'styled-components'

import PercentBar from './PercentBar'

class Row extends React.Component {
  state = {
  }

  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Percent>
          <PercentBar percentage={this.props.amount} />
        </Percent>
        <PostAmount>{this.props.amount}</PostAmount>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 45px;
  ${'' /* border: 2px solid blue; */}
  display: flex;
  align-items: center;
  padding: 5px;
`

const Title = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;
  ${'' /* border: 2px solid yellow; */}
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 900;
  color: #292b2c;
`

const Percent = styled.div`
  flex-grow: 5;
  flex-shrink: 0;
  flex-basis: 0;
  ${'' /* border: 2px solid yellow; */}
  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
`

const PostAmount = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;
  ${'' /* border: 2px solid yellow; */}
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #292b2c;
`

export default Row;
