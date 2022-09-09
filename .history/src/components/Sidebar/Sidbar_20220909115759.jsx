import React, { useContext,useState} from 'react'
import { StateContext } from '../context/ContextProfil'
import {HiOutlineMenu} from 'react-icons/hi'
import { menu } from '../Data/Data'


const Sidbar = (categoris) => {
  const [open,setOpen]=useState(true)
  const { activeMenu, setActiveMenu,categori,setCategori} = useContext(StateContext)
  
  const show=()=>{
    setOpen(!open)
  }
  

  return (
    <div className="flex">
        
        <div className={`bg:inerit sm:w-72 duration-300 bg-primary h-screen mt-20 relative flex flex-col gap-7 `}>
        <div>
          <span className="text-gray-300 text-xl sm:hidden"><HiOutlineMenu size={50}/></span>
        </div>
        <div className="hidden sm:block">
        {menu.map((item, index) => 
                      (
                        <div key={index} className="flex gap-5 ml-5 rounded  space-x-2 shadow-2xl hover:border-b-2 border-gray-200">
                          {
                            <span className={`text-5xl text-gray-200 mt-5 ${open &&"rotate-[360deg] hover:scale-105"}`}>{item.icon}</span>}
                          <button type="button" onClick={(e)=>setCategori(e.target.textContent)} className={`text-ColorText text-2xl mt-5 font-semibold ${!open && "scale-0 duration-300"}`}>{item.name}</button>
                        </div>
            ))}
        </div>
          
        </div>
    </div>
  )
}

export default Sidbar