import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-gray-900 w-full h-20 shadow-2xl z-1 '>
            <div className='flex font-bold text-2xl ml-3'>
                <span className='text-white'>SKB-</span>
                <span className='text-green-500'>MUSIC</span>
            </div>
            <div className='flex justify-around mr-3'>
                <ul className='text-white flex justify-between gap-5 text-xl '>
                    <li>Accueil</li>
                    <li>Connexion</li>
                    <li>Apropos</li>
                    <li></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;