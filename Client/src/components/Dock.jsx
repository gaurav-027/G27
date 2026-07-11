import React from 'react'
import dockItems from '../constant/DockItem.jsx'

export default function Dock() {
  return (
    <div className="w-full h-full flex justify-center">
        <div className="w-3/10 h-15 rounded-2xl backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,.35)] bg-white/10 flex">
            {
                dockItems.map((item,index)=>{
                    return (
                        <div key={index} className='text-white/50 w-1/7 flex justify-center items-center cursor-pointer'>
                            {item.icon}
                        </div>
                    )
                })
            }
        </div>
      </div>
  )
}
