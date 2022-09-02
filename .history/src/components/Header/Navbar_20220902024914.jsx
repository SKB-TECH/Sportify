import React ,{useContext}from 'react';
import {Link, Navigate} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {MdLogout} from 'react-icons/md'
import {StateContext} from '../context/ContextProfil';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {SiMusicbrainz} from 'react-icons/si'

const Navbar = ({search,valeur}) => {
    const {tokens,setTokens}=useContext(StateContext)
    const navigation=useNavigate("")

    const logout = () => {
        setTokens("")
        window.localStorage.removeItem("token")
    }

    return (
        <nav className='fixed z-10 flex justify-between items-center bg-primary w-full h-20 shadow-2xl z-1 border-b-2 border-ColorText'>
            <div className='flex font-bold text-2xl ml-3'>
                <SiMusicbrainz size={50} style={{color:"white"}}/>
                <span className='text-white mt-1'>SKB-</span>
                <span className='text-green-500 mt-1'>MUSIC</span>
                </div>
                    <div className='w-[40%] flex bg-gray-100 rounded-full '>
                        <AiOutlineSearch size={40} className="text-gray-500 mt-1 rounded-full " onClick={search} />
                        <input type="text" className='w-full h-15 bg-inherit outline-none mt-1 rounded-full text-left text-2xl shadow-2xl' onChange={valeur}/>
                    </div>
                <div>
            </div>
            <div className='flex gap-2 mr-10'>
                <MdLogout size={30} className='mt-1 text-gray-100'/>
                <button className='text-ColorText text-xl cursor-pointer font-bold hover:scale-105'
                onClick={logout}
                >Deconnexion</button>
            </div>
        </nav>
    );
};

export default Navbar;