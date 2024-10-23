import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/computer.glb');

  return (
    <mesh receiveShadow castShadow>
      {/* Use simplified lighting */}
      <ambientLight intensity={isMobile ? 0.2 : 0.5} color="#ffffff" />
      <directionalLight 
        position={[0, 10, 5]} 
        intensity={isMobile ? 0.3 : 0.6} 
        castShadow 
        shadow-mapSize={isMobile ? 256 : 512}
      />
      
      {/* Adjust scale and position for mobile */}
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.3 : 0.6} 
        position={isMobile ? [0, -2, -0.5] : [0, -3, -1]} 
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
    <Canvas 
      frameloop="demand" 
      shadows={!isMobile} 
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true, antialias: false }} // Turn off antialiasing
    >
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
