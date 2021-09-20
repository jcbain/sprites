import { useState, useEffect } from 'react';

const useMoveSprite = (options) => {
  const { numMovements, pixelsPerFrame } = options;
  const [ moveFrame, setMoveFrame ] = useState({direction: 1, leftPosition: 0, bgPosition: 0})


  useEffect(() => {
    const movePlayer = e => {
      e.preventDefault();
      setMoveFrame(prev => {
        const updateFrame = {}
        
        if(e.keyCode === 39){
          updateFrame.bgPosition = prev.bgPosition + (pixelsPerFrame/2)
          updateFrame.direction = 1;
          if(prev.leftPosition >= (numMovements * pixelsPerFrame) - pixelsPerFrame ) {
            updateFrame.leftPosition = 0;
          } else {
            updateFrame.leftPosition = prev.leftPosition + pixelsPerFrame;
          }
        }
  
        if(e.keyCode === 37){
          updateFrame.bgPosition = prev.bgPosition >= -(pixelsPerFrame/2) ? prev.bgPosition - (pixelsPerFrame/2) : 0;
          updateFrame.direction = -1
          if(prev.leftPosition <= 0) {
            updateFrame.leftPosition = (numMovements * pixelsPerFrame) - pixelsPerFrame;
          } else {
            updateFrame.leftPosition = prev.leftPosition - pixelsPerFrame;
          }
        }
  
        return {...prev, ...updateFrame};
      })
    }
  
    document.addEventListener('keydown', movePlayer)
  
    return () => {
      document.removeEventListener('keydown', movePlayer)
    }
  
  }, [pixelsPerFrame, numMovements, moveFrame])

  return { moveFrame }
}

export default useMoveSprite;