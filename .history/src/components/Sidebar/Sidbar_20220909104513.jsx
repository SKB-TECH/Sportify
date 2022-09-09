import React, { useContext,useState} from 'react'
import { StateContext } from '../context/ContextProfil'
import {HiOutlineMenu} from 'react-icons/hi'
import { menu } from '../Data/Data'


const Sidbar = (categoris) => {
  const [open,setOpen]=useState(true)
  const { activeMenu, setActiveMenu,categori,setCategori} = useContext(StateContext)
  
  

  return (
    <div className="flex">
        
        <div className={` w-72 duration-300 bg-primary h-screen mt-20 relative flex flex-col gap-7 `}>
        <span className="text-gray-300 text-xl"><HiOutlineMenu size={50}/></span>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Sidbar
