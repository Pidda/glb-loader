import './App.css'
import { useState } from 'react';
import Scene from './Components/Scene'

function App() {
  // Set default selected to chair
  const [selectedModel, SetSelectedModel] = useState<string>('chair');
  const [shouldStretch, SetStretchMode] = useState<boolean>(false);

  const handleStretch = () => 
  {
    SetStretchMode((prev) => !prev);
  };

  return (
     <div style={{ width: '100vw', height: '100vh' }}>
      <select
        value={selectedModel}
        onChange={(changeEvent) => SetSelectedModel(changeEvent.target.value)}
        style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
        <option value="chair">Chair</option>
        <option value="whiteSofa">White Sofa</option>
        <option value="darkSofa">Dark Sofa</option>
      </select>

      <button
        onClick={handleStretch}
        style={{ position: 'absolute', top: 50, left: 10,  zIndex: 1}}>
        {shouldStretch ? 'Reset' : 'Stretch'}
      </button>
      <Scene selectedModel={selectedModel} shouldStretch={shouldStretch} />
    </div>
  );
}

export default App;