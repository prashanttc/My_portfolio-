import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useInView } from "react-intersection-observer"

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./fat_batman.glb");

  return (
    <mesh>
    <hemisphereLight intensity={6} groundColor='black' />
    <pointLight intensity={10} position={isMobile?[1,1,-1]:[3,4,-0]}/>
    <primitive
      object={computer.scene}
      scale={isMobile ?2.1 : 4.5}
      position={isMobile ? [0, -5, 0] : [0, -6, 0 ]}
      rotation={[0, 1, 0]}
    />
  </mesh>
  );
};

const ComputersCanvas = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this threshold based on when you want to trigger rendering
  });
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
    <span ref={ref} style={{ height: '500px' }}>
      {inView && (
        <Canvas
          frameloop="demand"
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
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </span>
  );
};

export default ComputersCanvas;