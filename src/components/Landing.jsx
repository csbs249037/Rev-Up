import React from 'react'

export const Landing = () => {
    return (
        <div className='w-full h-screen bg-white pt-2'>
            <div className='textstructure mt-32 px-20'>
                <h1>{['WE Craft','EYE OPENING','Software solutions'].map((item,index)=>{
                    return <h1 className='uppercase text-8xl leading-none tracking-tighter' key={index}>{item}</h1>
                })}</h1>
            </div>
        </div>
    )
}
