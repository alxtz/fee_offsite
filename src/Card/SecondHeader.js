import React from 'react';
import styled from 'styled-components'

function SecondHeader(props) {
  return (
    <Container isHidden={ props.isHidden }>
      <ButtonGroup>
        <Title>ALL</Title>
        <Link href="" target="_blank">
          <img alt="twitter" src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/twitter.svg" />
        </Link>
        <Link href="" target="_blank">
          <img alt="facebook" src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/facebook.svg" />
        </Link>
        <Link href="" target="_blank">
          <img alt="instagram" src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/instagram.svg" />
        </Link>
        <Link href="" target="_blank">
          <img alt="youtube" src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/youtube.svg" />
        </Link>
      </ButtonGroup>
      <HideButton
        onClick={ () => props.onClickHide() }
      >
        HIDE
      </HideButton>
    </Container>
  );
}

const Container = styled.div`
  height: 230px;
  background: #292b2c;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;
  overflow: hidden;
  opacity: 1
  transition: height 0.5s ease, opacity 0.5s ease;
  position: relative;

  ${ props => props.isHidden && `
      height: 0px;
      opacity: 0;
    `
  }
`

const HideButton = styled.button`
  border: 0;
  background: #292b2c;
  color: white;
  padding: 2px 3px;
  font-size: 13px;
  margin: 0;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
`

const ButtonGroup = styled.div`
  width: 150px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  display: flex;
`

const Title = styled.div`
  width: 30px;
  background: #f7f7f7;
  color: #292b2c;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
`

const Link = styled.a`
  display: block;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px;
  cursor: pointer;

  img {
    height: 100%;
    filter: invert(100%);
  }
`

export default SecondHeader;
