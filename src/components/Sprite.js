import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 48px;
  height: 48px;
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

  useEffect(() => {
    const movePlayer = e => {
      console.log(e.keyCode)
      if(e.keyCode === 39){
        setLeftPosition(prev => {
          if(prev >= 144){
            return 0
          }
          return prev + 48;
        })
      }
    }
    document.addEventListener('keydown', movePlayer)

    return () => {
      document.removeEventListener('keydown', movePlayer)
    }

  }, [])



  return (
    <Container className="sprite-container">
      <SpriteImg className="sprite" src="images/dog_1_death.png" leftpos={leftPosition}/>
    </Container>
  )
}

export default Sprite;
