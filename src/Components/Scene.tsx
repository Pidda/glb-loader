import { Canvas } from '@react-three/fiber'
import Model from './Model';

const scaleBig = 1.3;

type SceneModel = {
  selectedModel: string;
};

export default function Scene({ selectedModel }: SceneModel){
  return (
    <Canvas camera={{ position: [0, 2, 4] }}>       
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />

      // === and == In java is confusing for me..
      <Model path="/models/canba7.glb"  position={[-2.3, -1, 0]} scale={selectedModel === 'whiteSofa' ? scaleBig : 1}/>
      <Model path="/models/arm_chair__furniture.glb" position={[0, -1, 0]} scale={selectedModel === 'chair' ? scaleBig : 1}/>
      <Model path="/models/chesterfield-sofa.glb" position={[2, -1, 0]} scale={selectedModel === 'darkSofa' ? scaleBig : 1}/>
    </Canvas>
  );
};