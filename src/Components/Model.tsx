// components/Model.tsx
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from '../../node_modules/three-stdlib/loaders/GLTFLoader'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type ModelData = {
  path: string;
  position: [number, number, number];
  selected: string;
  id: string;
  stretch?: boolean;
};

export default function Model({ path, position, selected, id, stretch,}: ModelData) {
  const gltf = useLoader(GLTFLoader, path);
  const meshReference = useRef<THREE.Object3D>(null);
  useEffect(() => {
    if (selected === id && meshReference.current) {
      meshReference.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          const geometry = mesh.geometry.clone();
          const geometryAttribute = geometry.attributes.position as THREE.BufferAttribute;

          for (let i = 0; i < geometryAttribute.count; i++) {
            const currentX = geometryAttribute.getX(i);
            geometryAttribute.setX(i, currentX * 1.5); 
          }

          geometryAttribute.needsUpdate = true;
          geometry.computeVertexNormals();
          mesh.geometry = geometry;
        }
      });
    }
  }, [stretch, selected]);

  return <primitive object={gltf.scene} position={position} ref={meshReference} />;
}