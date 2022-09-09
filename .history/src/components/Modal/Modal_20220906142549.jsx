import React,{useContext,useState} from 'react';
import {StateContext} from '../context/ContextProfil';

const Modal = ({visible,id}) => {
    const {categori,setCategori}=useContext(StateContext)
    if(visible){
        return (
            <div className='fixed inset-0 bg-black bg-opacity-30 w- backdrop-blur-sm flex justify-center items-center z-0'>
                <div className='bg-gray-100  rounded p-2'>
                    <iframe style={{borderRadius:"12px"}} 
                        src={`https://open.spotify.com/embed/${categori}/${id}?utm_source=generator`}
                        width="100%" 
                        height="380" 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; 
                        clipboard-write;
                        encrypted-media; 
                        fullscreen; 
                        picture-in-picture" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        );
    }
    else {
        return null
    }
};

export default Modal;