import React from 'react';
import{AiOutlineLike} from 'react-icons/ai'
import{AiFillPlayCircle} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'


const Card = ({icon,index,photo,id,url,followers,artist,album}) => {
return ( <div  className='bg-gray-300 w-[20%] rounded h-60 shadow-2xl ml-5 overflow-hidden mt-5 p-3 hover:'> 
    <p className='flex gap-2'>
        <img src={`${icon}`} alt='' sizes='30px' className='w-['/>
        <span className='text-gray-900'></span>
        <span className='text-gray-600 text-xl w-full'>{artist}</span>
        <FcLike/>
        <span> 2356654</span>
        <AiOutlineLike size={25}/>
        <span>78RR8R</span>
    </p>
    <div className='w-[100%] z-10 top-[-100px] h-56  relative opacity-0  hover:opacity-100 hover:top-[-300px]  ' >
        <AiFillPlayCircle size={70} className='absolute top-36 left-48 text-green-900' />
    </div>
</div>
);
};

export default Card;