import React from 'react'
import {BallCanvas} from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row md:mx-32  flex-wrap justify-center gap-10'>
      {technologies.map((technologies)=>(
        <div className='md:w-28 md:h-28 w-16 h-16' key={technologies.name}>
<BallCanvas icon={technologies.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"tech")