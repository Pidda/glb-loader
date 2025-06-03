// src/Scene.tsx
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from '../../node_modules/three-stdlib/loaders/GLTFLoader'
 import modelPath from '../assets/model.glb';

const Scene = () => {
  const gltf = useLoader(GLTFLoader, modelPath);
  return (
      <primitive object={gltf.scene} />
  );
};

export default Scene;