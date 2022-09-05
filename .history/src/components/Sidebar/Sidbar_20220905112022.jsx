import React, { useContext,useState} from 'react'
import { StateContext } from '../context/ContextProfil'
import {AiOutlineLeft} from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import { menu } from '../Data/Data'


const Sidbar = () => {
  const [open,setOpen]=useState(true)
  const { activeMenu, setActiveMenu, screensize,music,categori,setCategori} = useContext(StateContext)
  
  const categorisation=(e)=>{
     setCategori(e.target.value)
  }
  
  
  return (
    <div className="flex">
        <div className={` w-72 duration-300 bg-primary h-screen mt-20 relative flex flex-col gap-7 `}>
            {menu.map((item, index) => 
                      (
                        <div key={index} className="flex gap-5 ml-5 rounded  space-x-2 shadow-2xl hover:border-b-2 border-gray-200">
                          {<span className={`text-5xl text-gray-200 mt-5 ${open &&"rotate-[360deg] hover:scale-105"}`}>{item.icon}</span>}
                          <button onClick={} className={`text-ColorText text-2xl mt-5 font-semibold ${!open && "scale-0 duration-300"}`}>{item.name}</button>
                        </div>
                    ))}
        </div>
        {
          console.log(categori)
        }
    </div>
  )
}

export default Sidbar
