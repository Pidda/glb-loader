import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from '../../node_modules/three-stdlib/loaders/GLTFLoader'
import modelPathChair from '../assets/arm_chair__furniture.glb';
import modelPathWhiteSofa from '../assets/canba7.glb';
import modelPathDarkSofa from '../assets/chesterfield-sofa.glb';

const Scene = () => {
  const [chairAsset, whiteSofaAsset, darkSofaAsset] = useLoader(GLTFLoader, [
    modelPathChair,
    modelPathWhiteSofa,
    modelPathDarkSofa,
  ]);

  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      
      <primitive object={whiteSofaAsset.scene} position={[-2, -1, 0]} />
      <primitive object={chairAsset.scene} position={[0, -1, 0]} />
      <primitive object={darkSofaAsset.scene} position={[2, -1, 0]} />
    </Canvas>
  );
};

export default Scene;