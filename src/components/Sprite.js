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
`;

const Sprite = (props) => {
  const [ leftPosition, setLeftPosition ] = useState(0);
  const [ mode, setMode ] = useState('walk');
  const [ animal, setAnimal ] = [{name: 'bird_1', pixels: 32}]

  const modeStates = {
    death: 4, 
    attack: 4, 
    hurt: 2, 
    idle: 4,
    walk: 6
  }

  useEffect(() => {
    const movePlayer = e => {
      console.log(e.keyCode)
      if(e.keyCode === 39){
        setLeftPosition(prev => {
          if(prev >= (modeStates[mode] * animal.pixels) - animal.pixels ){
            return 0
          }
          return prev + animal.pixels;
        })
      }
    }
    document.addEventListener('keydown', movePlayer)

    return () => {
      document.removeEventListener('keydown', movePlayer)
    }

  }, [mode, animal])



  return (
    <Container wid={animal.pixels} ht={animal.pixels} className="sprite-container">
      <SpriteImg className="sprite" src={`images/${animal.name}/${mode}.png`} leftpos={leftPosition}/>
    </Container>
  )
}

export default Sprite;
