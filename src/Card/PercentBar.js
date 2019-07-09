import React from 'react';
import styled from 'styled-components'

class PercentBar extends React.Component {
  state = {
  }

  render() {
    return (
      <Container>
        <Bar barWidth={this.props.percentage}/>
        <Percentage>{this.props.percentage}%</Percentage>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: rgba(41, 43, 44, 0.1);
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
`

const Bar = styled.div`
  width: 50%;
  background-color: #f0ad4e;
  height: 100%;

  ${ props => `
    width: ${props.barWidth}%;
    `
  }
`

const Percentage = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`

export default PercentBar;
