import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import{styles} from "../styles";
import{navLinks} from "../constants";
import{menu,close,logo} from "../assets"

const Navbar = () => {
  const[active , setActive] = useState("'")
  const[toggle , setToggle] = useState(false)
  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
<Link to="/" className='flex gap-2 items-center' 
onClick={
  ()=>{
    setActive("");
  window.scrollTo(0,0)
  }}>
<img src={logo} alt="logo" className='w-9 h-9 object-contain' />
<p className='text-white flex text-[18px] font-bold cursor-pointer'>Prashant &nbsp;<span className='hidden sm:flex'>Chouhan</span> </p>
</Link>
<ul className='hidden sm:flex flex-row gap-10 list-none'>
  {navLinks.map((link)=>(
    <li key={link.id}
    className={`${
      active === link.title
      ?"text-white"
      :"text-secondary"}
      hover:text-white text-[18px] font-md cursor-pointer`}>
      <a href={`#${link.id}`}
      onClick={()=> setActive(link.title)}>
        {link.title}
        </a>
    </li>
  ))}
</ul>
<div className='sm:hidden  flex flex-1 justify-end items-center'>
  <img src={toggle?close :menu} alt="menu" className='h-[28px] w-[28px] cursor-pointer object-contain' onClick={()=>setToggle(!toggle)} />
  <div className={`${!toggle ? "hidden":"flex"} p-6 black-gradient top-20 absolute right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}>
  <ul className='flex items-start justify-end gap-4 flex-col list-none'>
  {navLinks.map((link)=>(
    <li key={link.id}
    className={`${
      active === link.title
      ?"text-white"
      :"text-secondary"}
      hover:text-white text-[16px] font-md font-poppins cursor-pointer`}>
      <a href={`#${link.id}`}
      onClick={()=>{ 
        setToggle(!toggle)
        setActive(link.title)}}>
        {link.title}
        </a>
    </li>
  ))}
</ul>
  </div>
</div>
      </div>
    </div>
  )
}

export default Navbar