import React from 'react';
import styled from 'styled-components';
function Detail() {
  return (
    <Container>
      {/* <LogoImage src='/images/' /> */}
      <ButtonGroup>
        <PlayButton>
          <img src="/images/play-icon-black.png" />Play
        </PlayButton>
        <AddButton>
          Play
        </AddButton>
      </ButtonGroup>
    </Container>
  )
}

export default Detail;
const Container = styled.div `
  padding: 0 40px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  background-image: url('/images/detail-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: .5;
    content: "";
    z-index: -1;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.a`
  margin: 0 5px;
  display: flex;
  align-items: center;
  padding: 5px 20px 5px 14px; 
  border-radius: 4px;
  border: 2px solid #ddd;
  background-color: #ddd;
  color: #000;
  cursor: pointer;
`

const AddButton = styled(PlayButton)`
  
`