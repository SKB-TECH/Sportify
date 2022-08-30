import React, { useContext } from 'react'
import { StateContext } from '../context/ContextProfil'
import {AiOutlineLeft} from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import { menu } from '../Data/Data'



const Sidbar = () => {
  const { activeMenu, setActiveMenu, screensize } = useContext(StateContext)
  return (
    <div className="flex">
      <div className="bg-primary h-screen w-72 ">
        <div className="flex flex-col ml-5 gap-7 mt-5">
          {menu.map((item, index) => (
            <div className="flex gap-2">
              {<span className='text-5xl text-gray-200'>{item.icon}</span>}
              <button className='text-ColorText text-2xl font-semibold'>{item.name}</button>
            </div>
          ))}
        </div>
      </div>
      <div className='p-7 flex-1 text-2xl font-semibold'>
        Hom Page
      </div>
    </div>
  )
}

export default Sidbar
