import React, { useContext,useState} from 'react'
import { StateContext } from '../context/ContextProfil'
import {AiOutlineLeft} from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import { menu } from '../Data/Data'


const Sidbar = (valeur) => {
  const [open,setOpen]=useState(true)
  const { activeMenu, setActiveMenu, screensize,music } = useContext(StateContext)
 
  return (
    <div className="flex">
        <div className={` w-72 duration-300 bg-primary h-screen mt-20 relative flex flex-col gap-7 `}>
            {menu.map((item, index) => 
                      (
                        <div className="flex gap-5 ml-5 rounded  space-x-2 shadow-2xl" key={index} >
                        {<span className={`text-5xl text-gray-200 mt-5 ${open &&"rotate-[360deg] hover:scale-105 border-b-2 border-gray-200"}`}>{item.icon}</span>}
                        <button  className={`text-ColorText text-2xl mt-5 font-semibold ${!open && "scale-0 duration-300"}`} onClick={valeur}>{item.name}</button>
                        </div>
                    ))}
        </div>
    </div>
   
  )
}

export default Sidbar
