import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./pony_cartoon.glb");

  return (
    <mesh>
    <hemisphereLight intensity={isMobile ? 0.2 : 5} groundColor='black' />
    <spotLight
      position={isMobile ? [-10, 30, 5] : [-10, 10, 0]} // Adjusted positions
      angle={0.12}
      penumbra={1}
      intensity={isMobile ? 0.8 : 1} // Adjusted intensity for mobile
      castShadow
      shadow-mapSize={isMobile?528:1024}
    />
    <pointLight 
      position={isMobile ? [0, 5, 2] : [0, 10, 0]} // Adjusted position for mobile
      intensity={isMobile ? 1 : 2} // Adjusted intensity for mobile
    />
    <primitive
      object={computer.scene}
      scale={isMobile ?2 : 3}
      position={isMobile ? [0, -3, 0] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      

      <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;