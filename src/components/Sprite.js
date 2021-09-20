import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${({wid}) => wid}px;
  height: ${({ht}) => ht}px;
  position: relative;
  overflow: hidden;
`;

const SpriteImg = styled.img`
  position: absolute;
  top: 0;
  left: -${({leftpos}) => leftpos}px;
  transform: scaleX(${({dir}) => dir});
`;

const Sprite = (props) => {
  const [ leftPosition, setLeftPosition ] = useState(0);
  const [ mode ] = useState('attack');
  const [ animal ] = [{name: 'cat_2', pixels: 48}]
  const [ direction, setDirection ] = useState(1)
  const [ moveFrame, setMoveFrame ] = useState({direction: 1, leftPosition: 0})
  
  useEffect(() => {
    const modeStates = {
      death: 4, 
      attack: 4, 
      hurt: 2, 
      idle: 4,
      walk: 6
    }
    const movePlayer = e => {
      console.log(e.keyCode)
      setMoveFrame(prev => {
        const updateFrame = {}
        
        if(e.keyCode === 39){
          updateFrame.direction = 1;
          if(prev.leftPosition >= (modeStates[mode] * animal.pixels) - animal.pixels ) {
            updateFrame.leftPosition = 0;
          } else {
            updateFrame.leftPosition = prev.leftPosition + animal.pixels;
          }
        }

        if(e.keyCode === 37){
          updateFrame.direction = -1
          if(prev.leftPosition <= 0) {
            updateFrame.leftPosition = (modeStates[mode] * animal.pixels) - animal.pixels;
          } else {
            updateFrame.leftPosition = prev.leftPosition - animal.pixels;
          }
        }

        return updateFrame;
      })
    }

    document.addEventListener('keydown', movePlayer)

    return () => {
      document.removeEventListener('keydown', movePlayer)
    }

  }, [mode, animal, moveFrame])



  return (
    <Container wid={animal.pixels} 
      ht={animal.pixels} 
      className="sprite-container"
    >
      <SpriteImg className="sprite" 
        src={`images/${animal.name}/${mode}.png`} 
        leftpos={moveFrame.leftPosition} 
        dir={moveFrame.direction}
      />
    </Container>
  )
}

export default Sprite;
