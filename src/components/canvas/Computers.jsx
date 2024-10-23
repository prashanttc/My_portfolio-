import React, { Suspense, useState , useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  
  return (
    <mesh receiveShadow castShadow>
      <hemisphereLight 
        intensity={0.5} 
        groundColor="gray" 
        skyColor="#ffffff"
      />
      <ambientLight intensity={0.5} color="#ffffff" />
      <pointLight 
        position={[10, 10, 10]} 
        intensity={2} 
        color="#ffffff" 
        castShadow
      />
      <SpotLight 
        position={[0, 20, 10]}  
        angle={0.3}
        penumbra={0.5}
        intensity={3.5}
        castShadow
        shadow-mapSize={2048} 
        color="#f8e6a0"
      />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1.5} 
        shadow-mapSize={2048}
        castShadow 
      />
      <primitive 
        object={computer.scene} 
        scale={isMobile?0.50:0.75}
        position={isMobile?[0, -2.8, -1.8]:[0,-3.8,-1.0]} 
        rotation={[-0.01, -0.2, -0.1]}
        receiveShadow
        castShadow
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile , setIsMobile]=  useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event)=>{
setIsMobile(event.matches)
    } 
    mediaQuery.addEventListener("change",
      handleMediaQueryChange
    )
    return ()=>{
    mediaQuery.removeEventListener("change", handleMediaQueryChange)
  }
  }, [])
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
