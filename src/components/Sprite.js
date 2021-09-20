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
  const { mode, pixelsPerFrame, animal, leftPosition, direction } = props;
  
  return (
    <Container wid={pixelsPerFrame} 
      ht={pixelsPerFrame} 
      className="sprite-container"
    >
      <SpriteImg className="sprite" 
        src={`images/${animal}/${mode}.png`} 
        leftpos={leftPosition} 
        dir={direction}
      />
    </Container>
  )
}

export default Sprite;
