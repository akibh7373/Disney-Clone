import React from 'react'
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
      <h2 className='moviesHeader'>Recommended for you</h2>
      <Content>
        <Wrap>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YzUraQWOziVdb8d0hXkZ8gHaFP%26pid%3DApi&f=1&ipt=eee20c71f38e924ad8c64dc4109c299e7800bf5cca66e516e66a5142e50c452c&ipo=images' />
        </Wrap>
        <Wrap>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YzUraQWOziVdb8d0hXkZ8gHaFP%26pid%3DApi&f=1&ipt=eee20c71f38e924ad8c64dc4109c299e7800bf5cca66e516e66a5142e50c452c&ipo=images' />
        </Wrap>
        <Wrap>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YzUraQWOziVdb8d0hXkZ8gHaFP%26pid%3DApi&f=1&ipt=eee20c71f38e924ad8c64dc4109c299e7800bf5cca66e516e66a5142e50c452c&ipo=images' />
        </Wrap>
        <Wrap>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YzUraQWOziVdb8d0hXkZ8gHaFP%26pid%3DApi&f=1&ipt=eee20c71f38e924ad8c64dc4109c299e7800bf5cca66e516e66a5142e50c452c&ipo=images' />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies;

const Container = styled.div``
const Content = styled.div`
 padding: 20px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
  rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`