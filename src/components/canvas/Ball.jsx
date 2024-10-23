import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import Loader from "../Loader";
import { useInView } from "react-intersection-observer";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial 
          color="#fff8eb" 
          polygonOffset 
          polygonOffsetFactor={-5} 
          flatShading 
        />
        <Decal 
          position={[0, 0, 1]} 
          map={decal} 
          rotation={[2 * Math.PI, 0, 6.25]} 
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this threshold as needed
    triggerOnce: true, // Render only once when in view, if you want to avoid re-renders.
  });

  return (
    <div ref={ref} className="w-full h-auto">
      {inView && (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
