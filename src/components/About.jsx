    import React from 'react'

    export const About = () => {
        return (
        <div className="w-full bg-[#CDEA68] rounded-t-2xl p-20">
            <h1 className="text-black text-5xl capitalize leading-[3.5vw] font-medium">
            "RevUp Software is a company that offers a SaaS platform designed to
            help non-profits and others leverage data and social media for
            fundraising success".
            </h1>
            <div className="border-t border-[#839540] mt-20 flex">
                <div className='w-1/2'>
                    <h1 className='text-black text-5xl mt-8'>Our approach:</h1>
                    <button className='bg-black text-white rounded-full px-4 py-3 flex items-center gap-x-4 mt-5'>Read More 
                        <div className='w-3 h-3 bg-white rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 mt-8'>
                    <img src="https://miro.medium.com/v2/resize:fit:1024/1*u9uFmS0KECEmveQ0PbDx3g.png" alt="" className='rounded-3xl w-3/4 ml-auto hover:scale-105 transition' />
                </div>
            </div>
        </div>
        );
    }
