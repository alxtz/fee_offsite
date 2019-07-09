import React from 'react';
import styled from 'styled-components'
import Row from './Row'

import TERMS from './terms.json'

class Table extends React.Component {
  state = {
  }

  render() {
    return (
      <Container>
        <IntroBar>
          <Title>TERMS</Title>
          <Percent>% OF TOTAL POSTS</Percent>
          <PostAmount># OF POSTS</PostAmount>
        </IntroBar>
        {
          TERMS.map(term => {
            return (
              <Row
                title={ term.name }
                amount={ term.count }
              />
            )
          })
        }
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* border: 2px solid red; */}
  overflow-y: auto;
`

const IntroBar = styled.div`
  height: 20px;
  display: flex;
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
`

const Title = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #DDDDDD;
`

const Percent = styled.div`
  flex-grow: 5;
  flex-shrink: 0;
  flex-basis: 0;
  border-bottom: 2px solid #DDDDDD;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PostAmount = styled.div`
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;
  border-bottom: 2px solid #DDDDDD;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export default Table;
