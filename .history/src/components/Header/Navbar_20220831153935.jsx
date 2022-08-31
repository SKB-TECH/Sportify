import React ,{useContext}from 'react';
import {Link} from 'react-router-dom';
import {StateContext} from '../context/ContextProfil';
import {AiOutlineSearch} from 'react-icons/ai'
import {MdLogout} from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className='fixed z-10 flex justify-between items-center bg-primary w-full h-20 shadow-2xl z-1 border-b-2 border-ColorText'>
            <div className='flex font-bold text-2xl ml-3'>
                <span className='text-white'>SKB-</span>
                <span className='text-green-500'>MUSIC</span>
                </div>
                    <div className='w-[40%] flex bg-gray-100 rounded-full '>
                        <AiOutlineSearch size={40} className="text-gray-500 mt-1 rounded-full "/>
                        <input type="text" className='w-full h-15 bg-inherit outline-none mt-1 rounded-full text-left text-2xl'/>
                    </div>
                <div>
            </div>
            <div className='flex '>
                <MdLogout size={30} className='mt-1 text-gray-100 -2'/>
                <button className='text-gray-100'>Deconnexion</button>
            </div>
        </nav>
    );
};

export default Navbar;