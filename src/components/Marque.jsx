import { motion } from 'framer-motion'
import React from 'react'

export const Marque = () => {
  
  return (
    <div className="w-full bg-[#004d43] py-20 text-white rounded-t-3xl">
      <div className='border-y-[1px] border-slate-400 text-[22vh] font-bold pb-7 flex whitespace-nowrap leading-none uppercase'>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} >Elevating Your Experience.</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} >Fueling Your Growth!.</motion.h1> 
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} >Elevating Your Experience.</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} >Fueling Your Growth!.</motion.h1> 
      </div>
    </div>
  )
}
