import React, { useContext,useState} from 'react'
import { StateContext } from '../context/ContextProfil'
import {AiOutlineLeft} from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import { menu } from '../Data/Data'


const Sidbar = () => {
  const [open,setOpen]=useState(true)
  const { activeMenu, setActiveMenu, screensize } = useContext(StateContext)
  return (
    <div className="flex">
        <div className={` ${open ? 'w-72':'w-20'} duration-300 bg-primary h-screen mt-20 relative flex flex-col gap-7`}>
            
            <AiOutlineLeft size={40} className={`text-primary bg-gray-100  rounded-full
              absolute cursor-pointer right-1 top-9 w-7 h-7 border-5 border-primary
              ${!open && "rotate-180"}
            `}
            onClick={()=>{setOpen(!open)}}
            />

            {menu.map((item, index) => (
                        <div className="flex  ml-5 mr-5 rounded mt-20 space-x-2 " key={index}>
                        {<span className={`text-5xl text-gray-200 ${open &&"rotate-[360deg] hover:scale-110"}`}>{item.icon}</span>}
                        <button className={`text-ColorText text-2xl font-semibold ${!open && "scale-0 duration-300"}`}>{item.name}</button>
                        </div>
                    ))}
        </div>
    </div>
   
  )
}

export default Sidbar
