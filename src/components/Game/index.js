import styled from 'styled-components';

const Container = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  /* background-image: url(${({path}) => path}); */
  /* background-repeat: repeat-x; */
`

const BackgroundImg = styled.img`
  width: 576px;
  height: 324px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-${({bgPosition}) => bgPosition}px);
`

const SpirteWrapper = styled.div`
  position: absolute;
  top: 256px;
  left: 48px;
`

const Game = (props) => {
  const {children, spritePosition} = props;

  return (
    <Container>
      <BackgroundImg src={'./images/background.png'} bgPosition={spritePosition}/>
      <SpirteWrapper>
        {children}
      </SpirteWrapper>
    </Container>
  )
}

export default Game;