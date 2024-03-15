import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export const Landing = () => {
    return (
        <div className='w-full h-screen bg-white pt-2'>
            <div className='textstructure mt-32 px-20'>
            <h1>{['WE Craft','EYE OPENING','Software solutions'].map((item,index)=>{
                    return (
                        <div className='flex items-center'>
                            {index === 1 &&(<div className='w-[130px] bg-green-500 h-[5vw] rounded-md mt-3'></div>)}
                            <h1 className='uppercase text-9xl leading-none tracking-tighter font-bold' key={index}>{item}</h1>
                        </div>
                    )
                })}</h1>
                
            </div>
            <div className='mt-32 border-b-2 border-slate-200 '/>
            <div className='px-20 pt-5 flex justify-between'>{["for public and private comapnies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-sm capitalize' key={index}>{item}</p>
            ))}
                <div className='group flex items-center'>
                    <button className='group-hover:bg-black group-hover:text-white transition capitalize border-1 px-2 py-1 mr-1 border-2 rounded-full'>Lets Start</button>
                    <div className='group-hover:bg-black group-hover:text-white transition border-2 p-1 rounded-full'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
