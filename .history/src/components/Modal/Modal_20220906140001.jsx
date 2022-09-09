import React,{useContext,useState} from 'react';
import {StateContext} from '../context/ContextProfil';

const Modal = ({visible}) => {

    if(visible){
        return (
            <div className='fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center z-0'>
                <div className='bg-gray-100  rounded p-2'>
                   
                </div>
    
            </div>
        );
    }
    else {
        return null
    }
};

export default Modal;