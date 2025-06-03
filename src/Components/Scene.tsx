import { Canvas } from '@react-three/fiber'
import Model from './Model';

type SceneModel = {
  selectedModel: string;
  shouldStretch: boolean;
};

export default function Scene({ selectedModel, shouldStretch}: SceneModel){
  return (
  <Canvas shadows camera={{ position: [0, 2, 3] }}>       
  <ambientLight intensity={0.4} />
  <directionalLight
  position={[2, 2, 2]}
  intensity={2.2}
  castShadow={true}
  shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
  shadow-camera-far={50}/>

   <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.0, 0]} receiveShadow={true}>
  <planeGeometry args={[10, 10]}  />
  <meshStandardMaterial color="yellow"  />

  <mesh rotation={[1, 0, 0]} position={[0, 5.01, 0]} receiveShadow={true}>
  <planeGeometry args={[50, 20]} />
  <meshStandardMaterial color="blue" />
</mesh>
</mesh>

    <Model
      path="/models/canba7.glb"  
      position={[-2.3, -1, 0]} id='whiteSofa' 
      selected={selectedModel} 
      stretch={shouldStretch}/>
    <Model
      path="/models/arm_chair__furniture.glb"  
      position={[0, -1, 0]} id='chair' 
      selected={selectedModel} 
      stretch={shouldStretch}/>
    <Model
      path="/models/chesterfield-sofa.glb"  
      position={[2, -1, 0]} id='darkSofa' 
      selected={selectedModel} 
      stretch={shouldStretch}/>

    </Canvas>
  );
};