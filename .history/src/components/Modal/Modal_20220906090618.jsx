import React from 'react';
import { useState } from 'react';

const Modal = () => {
    const [visible,setVisible]=useState(true)

    

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-gray-100  rounded p-2'>
                <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.<br />
                     Asperiores ullam illum <br /> eveniet fugiat minima hic, eaque,<br />
                      assumenda odit repellat maiores<br /> facere quis enim nulla porro adipisci <br />
                      reiciendis nemo? Asperiores, ullam.
                </p>
            </div>
        </div>
    );
};

export default Modal;