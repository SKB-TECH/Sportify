import React,{useContext}  from 'react';
import{AiOutlineLike} from 'react-icons/ai'
import{AiFillPlayCircle} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {StateContext} from '../context/ContextProfil';
import Modal from '../Modal/Modal';

const Card = ({icon,index,photo,id,url,followers,artist,album}) => {
    // const {visible,setVisible}=useContext(StateContext);
    const {visible,setVisible}=useContext(StateContext)
    return ( 
    <div  className='box-content bg-gray-300 w-[20%] rounded h-80 shadow-2xl ml-5 overflow-hidden mt-5 p-3 hover:'> 
        <p className='flex flex-col gap-2'>
            <img src={`${icon}`} alt='' sizes='30px' />
            <div className="flex flex-col">
            <span className='text-gray-600 text-xl w-full'>{artist}</span>
            </div>
        </p>
        <div key={index} className='w-[100%] z-10 top-[-250px] h-56  relative opacity-0  hover:opacity-100 hover:top-[-250px] transition-all delay-150 ' >
            <button ><AiFillPlayCircle size={70} className='absolute top-36 left-48 text-green-500 z-100' /></button>
        </div>
       
    </div>
      {
        visible && <Modal visible={visible}/>
      }  
    
);
};

export default Card;