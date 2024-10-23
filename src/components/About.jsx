import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from "framer-motion";
import { styles } from '../styles';
import {services} from "../constants";
import { SectionWrapper } from '../hoc';
import {fadeIn ,textVariant } from "../utils/motion"

const ServiceCard =({index,title,icon})=>{
  return (
<Tilt className=" xs:w-[250px] w-full">
  <motion.div variants={fadeIn("right" ,"spring",0.5 * index ,0.75 )} className='w-full green-gradient p-[1px] rounded-[20px] shadow-card'>
<div options={{
  max:45,
  scale:1,
  speed:450
}} 
className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex lfex-col justify-evenly items-center'>
<img src={icon} alt={title}  className='w-16 h-16 object-contain'/>
<h3 className='text-white text-[20px] font-bold text-center'>
  {title}
</h3>
</div>
  </motion.div>
</Tilt>
  ) 
}

const About = () => {
  return (
   <div className='mt-0'>
   <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>Introduction</p>
    <p className={`${styles.sectionHeadText}`}>Overview</p>
   </motion.div>
   <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 leading-[30px] text-secondary text-[17px] max-w-4xl'>
   I am a full-stack developer based in Indore, India, dedicated to building innovative and dynamic web applications. With a strong foundation in both front-end and back-end technologies, I specialize in using frameworks like React and Node.js, along with Express for server-side development. My interests extend to machine learning, where I explore predictive analytics to enhance user experiences and drive informed decision-making.
   </motion.p>
   <div className='mt-20 flex flex-row flex-wrap md:ml-32 gap-10'>
    {services.map((service, index)=>(
<ServiceCard key={service} index={index} {...service} />
    ))}
   </div>
   </div>
  )
}

export default SectionWrapper(About , "about")