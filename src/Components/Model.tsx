// components/Model.tsx
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from '../../node_modules/three-stdlib/loaders/GLTFLoader'

type SceneModel = {
  path: string;
  position: [number, number, number];
  scale?: number;
};

export default function Model({ path, position, scale = 1.0 }: SceneModel) {
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} position={position} scale={scale} />;
}