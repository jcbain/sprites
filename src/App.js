import './App.css';
import { useState } from 'react';
import useMoveSprite from './hooks/useMoveSprite';
import Sprite from './components/Sprite';

function App() {
  const [ mode ] = useState('attack');
  const [ animal ] = [{name: 'cat_2', pixels: 48}]
  const modeStates = {
      death: 4, 
      attack: 4, 
      hurt: 2, 
      idle: 4,
      walk: 6
  }
  const { moveFrame } = useMoveSprite({pixelsPerFrame: animal.pixels, numMovements: modeStates[mode]})

  return (
    <div className="App">
      <Sprite mode={mode}
        animal={animal.name}
        pixelsPerFrame={animal.pixels}
        leftPosition={moveFrame.leftPosition}
        direction={moveFrame.direction}
      />
    </div>
  );
}

export default App;
