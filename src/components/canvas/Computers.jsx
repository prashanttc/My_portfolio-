import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./pony_cartoon.glb'); // Ensure this path is correct

  return (
    <mesh receiveShadow castShadow>
      {/* Use simplified lighting */}
      <ambientLight intensity={isMobile ? 1 : 2} color="#ffffff" />
      <directionalLight 
        position={[0, 10, 5]} 
        intensity={isMobile ? 1 : 1} // Increase intensity for visibility
        castShadow 
        shadow-mapSize={isMobile ? 1024 : 2048}
      />
      
      {/* Adjust scale and position for mobile */}
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 1  : 2} // Adjust scale for better visibility
        position={isMobile ? [0, -1.3, 0] : [0, -2, 0]} // Adjust position
        rotation={[0.01, 0, 0]} 
        rotation-y={0}
        receiveShadow
        castShado
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
      camera={{ position: [5, 5, 10], fov: 25 }} // Adjusted camera position for better view
      gl={{ preserveDrawingBuffer: true, antialias: false }} // Turn off antialiasing
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} // Allow zoom for better visibility
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={0} // Allow looking down
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
