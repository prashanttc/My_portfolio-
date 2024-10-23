import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  
  return (
    <mesh receiveShadow castShadow>
      {/* Use simpler lighting for better performance */}
      <hemisphereLight 
        intensity={0.35} 
        groundColor="gray" 
        skyColor="#ffffff"
      />
      <ambientLight intensity={isMobile ? 0.3 : 0.5} color="#ffffff" />
      
      {/* Adjust point light intensity and shadow quality for mobile */}
      <pointLight 
        position={[10, 10, 10]} 
        intensity={isMobile ? 0.8 : 1.5} 
        color="#ffffff" 
        castShadow
      />
      
      {/* Simplified spot light settings for mobile */}
      <SpotLight 
        position={[0, 20, 10]}  
        angle={0.3}
        penumbra={0.5}
        intensity={isMobile ? 1 : 2.5}
        castShadow
        shadow-mapSize={isMobile ? 512 : 1024} 
        color="#f8e6a0"
      />
      
      {/* Simplify directional light settings */}
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={isMobile ? 0.3 : 0.8} 
        shadow-mapSize={isMobile ? 512 : 1024}
        castShadow 
      />
      
      {/* Adjust scale, position, and rotation for mobile */}
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.4 : 0.75} 
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.5, -1.0]} 
        rotation={[-0.01, -0.2, -0.1]} 
        receiveShadow
        castShadow
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
