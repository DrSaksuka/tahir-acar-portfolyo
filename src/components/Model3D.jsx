import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei';

// A placeholder component to represent a CAD part (e.g. a stylized gear or mechanical constraint)
const CADRepresentation = () => {
  const meshRef = useRef();
  const groupRef = useRef();
  
  // Subtle animation
  useFrame((state, delta) => {
    // Slow rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    // Subtle hover animation inside Float but adding some mechanical rotation to the inner mesh
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <meshStandardMaterial 
            color="#60a5fa" 
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      </Float>
    </group>
  );
};

const Model3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      
      {/* CAD Model Representation */}
      <CADRepresentation />
      
      {/* Environment map to give realistic reflections to metallic material */}
      <Environment preset="city" />
      
      {/* Interactive controls */}
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 1.5} 
        autoRotate={true}
        autoRotateSpeed={1.0}
      />
      
      {/* Soft shadow on the floor */}
      <ContactShadows 
        position={[0, -1.8, 0]} 
        opacity={0.5} 
        scale={10} 
        blur={2.5} 
        far={4} 
      />
    </Canvas>
  );
};

export default Model3D;
