import React from 'react'
import dockItems from '../constant/DockItem.jsx'

export default function Dock() {

  return (
    <div className="w-full h-full flex justify-center px-5">
        <div className="w-[min(92vw,28rem)] sm:w-[min(72vw,32rem)] lg:w-[30%] lg:min-w-[26rem] lg:max-w-[34rem] h-full max-h-15 rounded-2xl backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,.35)] bg-white/10 flex">
            {
                dockItems.map((item,index)=>{
                    return (
                        <div onClick={()=>{window.open(item.goto)}} key={index} className='text-white/50 flex-1 min-w-0 flex justify-center items-center cursor-pointer'>
                            {item.icon}
                        </div>
                    )
                })
            }
        </div>
      </div>
  )
}
