import React from 'react';

const Modal = () => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center rounded-lg'>
            <div className='bg-gray-100'>
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