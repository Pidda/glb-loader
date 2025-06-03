import { Canvas } from '@react-three/fiber'
import Model from './Model';

type SceneModel = {
  selectedModel: string;
};

export default function Scene({ selectedModel }: SceneModel){
  return (
    <Canvas camera={{ position: [0, 2, 4] }}>       
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
    <Model
      path="/models/canba7.glb"  
      position={[-2.3, -1, 0]} id='whiteSofa' 
      selected={selectedModel} 
      />
    <Model
      path="/models/arm_chair__furniture.glb"  
      position={[0, -1, 0]} id='chair' 
      selected={selectedModel} 
      />
    <Model
      path="/models/chesterfield-sofa.glb"  
      position={[2, -1, 0]} id='darkSofa' 
      selected={selectedModel} 
      />
    </Canvas>
  );
};