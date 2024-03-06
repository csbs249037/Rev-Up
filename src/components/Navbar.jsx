import React from 'react'

function Navbar() {
    return (
        <div className='w-full px-20 py-8 fixed z-[999] flex items-center justify-between'>
            <div className='Logo font-thin text-2xl capitalize'>Rev up</div>
            <div className="links flex gap-10">
                {["Services","about us","our Work","Insight","contact us"].map((item,index)=>(
                    <a key={index} className={`capitalize font-thin text-md ${index === 4 && "ml-32"}`}>{item}</a>
                ))}
            </div>
        </div>
    )
}

export default Navbar