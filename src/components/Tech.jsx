import React, { useState, useEffect } from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [displayedTechnologies, setDisplayedTechnologies] = useState(technologies);

  useEffect(() => {
    
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayedTechnologies(technologies.slice(0, 6));
    } else {
      setDisplayedTechnologies(technologies);
    }
  }, [isMobile]);

  return (
    <div className='flex flex-row md:mx-32 flex-wrap justify-center gap-10'>
      {displayedTechnologies.map((tech) => (
        <div className='md:w-28 md:h-28 w-16 h-16' key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, "tech");
