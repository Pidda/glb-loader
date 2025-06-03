import './App.css'
import { useState } from 'react';
import Scene from './Components/Scene'

function App() {
  // Set default selected to chair
  const [selectedModel, SetSelectedModel] = useState<string>('chair');

  return (
     <div style={{ width: '100vw', height: '100vh' }}>
      <select
        value={selectedModel}
        onChange={(changeEvent) => SetSelectedModel(changeEvent.target.value)}
        style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}
      >
        <option value="chair">Chair</option>
        <option value="whiteSofa">White Sofa</option>
        <option value="darkSofa">Dark Sofa</option>
      </select>

      <Scene selectedModel={selectedModel} />
    </div>
  );
}

export default App;