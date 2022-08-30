import React ,{useContext}from 'react';
import {Link} from 'react-router-dom';
import {StateContext} from '../context/ContextProfil';

const Navbar = () => {
    const {profile,setProfile}=useContext(StateContext)
    console.log(profile);
    return (
        <nav className='flex justify-between items-center bg-primary w-full h-20 shadow-2xl z-1 border-b-2 border-ColorText'>
            <div className='flex font-bold text-2xl ml-3'>
                <span className='text-white'>SKB-</span>
                <span className='text-green-500'>MUSIC</span>
            </div>
            <div className='flex  mr-3'>
                <ul className='text-white flex justify-end gap-5 text-xl '>
                    <li>Accueil</li>
                    <li>Connexion</li>
                    <li>Apropos</li>
                    <li>Deconnexion</li>
                </ul>
               
            </div>
            <div>
                
            </div>
        </nav>
    );
};

export default Navbar;