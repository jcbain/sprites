import styled from 'styled-components';
import Sprite from './Sprite';

const Container = styled.div`
  height: 60px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: start;
  /* border: 2px solid #dd81c6; */
  box-shadow: 
    0px -4px 0 2px black,
    -4px 2px 0 0px black,
    -2px 2px 0 0px black;
    ;
`;

const SpriteCard = () => {
  return (
    <Container>
      <Sprite mode={'attack'}
        animal={'dog_2'}
        pixelsPerFrame={48}
        leftPosition={0}
        direction={1}
      />
    </Container>
  )
}

export default SpriteCard;