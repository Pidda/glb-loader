// components/Model.tsx
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from '../../node_modules/three-stdlib/loaders/GLTFLoader'
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type ModelData = {
  path: string;
  position: [number, number, number];
  selected: string;
  id: string;
  stretch?: boolean;
  scale?: number;
};

export default function Model({ path, position, selected, id, stretch }: ModelData) {
  const gltf = useLoader(GLTFLoader, path);
  const meshReference = useRef<THREE.Object3D>(null);
  const [originalGeometries, setOriginalGeometries] = useState<Map<THREE.Mesh, THREE.BufferGeometry>>(new Map());

  useEffect(() => {
    if (meshReference.current) 
      {
      meshReference.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) 
          {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            const originalGeometry = originalGeometries.get(mesh);     

          if(stretch && selected === id)
          {    
            if(!originalGeometry) 
            {        
              const cloned = mesh.geometry.clone();
              originalGeometries.set(mesh, cloned);
              setOriginalGeometries(new Map(originalGeometries));        
            }
            
            const clonedObjectGeometry = mesh.geometry.clone();
            const geometryAttributePosition = clonedObjectGeometry.attributes.position as THREE.BufferAttribute;

            for (let i = 0; i < geometryAttributePosition.count; i++) 
            {
              const currentX = geometryAttributePosition.getX(i);
              geometryAttributePosition.setX(i, currentX * 1.5); 
            }

            geometryAttributePosition.needsUpdate = true;
            clonedObjectGeometry.computeVertexNormals();
            mesh.geometry = clonedObjectGeometry;
            }
            else 
            {
              if(originalGeometry) 
              {
                mesh.geometry = originalGeometry.clone();
              }
            }
          }
      });
    }
  }, [stretch, selected]);

  return <primitive object={gltf.scene} position={position} ref={meshReference} castShadow receiveShadow/>;
}