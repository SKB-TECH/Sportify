import React ,{useContext} from 'react';
import Navbar from '../Header/Navbar';
import {StateContext} from '../context/ContextProfil';

const Leading = () => {
    const {profile,setProfile}=useContext(StateContext)

    return (
        <>
            <Navbar/>
            <div className=''>
             je suis leading page
            </div>
        </>
        
    );
};

export default Leading;