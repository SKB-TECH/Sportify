import React,{useContext} from 'react';
import {StateContext} from '../context/ContextProfil'

const Modal = () => {
    const {visible,setVisible}=u

    if(visible){
        return (
            <div className='fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center z-0'>
                <div className='bg-gray-100  rounded p-2'>
                    <p>
                        Lorem ipsum dolor sit amet, <br /> 
                        consectetur adipisicing elit.<br />
                        Asperiores ullam illum <br /> 
                        eveniet fugiat minima<br />
                        assumenda odit repellat maiores<br /> 
                        facere quis enim nadipisci <br />
                        reiciendis nemo? Asperiores, ullam.
                    </p>
                </div>
    
            </div>
        );
    }
    else {
        return "bien"
    }
};

export default Modal;