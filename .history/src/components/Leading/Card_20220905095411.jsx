import React from 'react';
import{AiOutlineLike} from 'react-icons/ai'
import{AiFillPlayCircle} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'


const Card = ({icon,index,photo,id,url,followers,artist,album}) => {
return ( <div  className='box-content bg-gray-300 w-[20%] rounded h-60 shadow-2xl ml-5 overflow-hidden mt-5 p-3 hover:'> 
    <p className='flex flex-col gap-2'>
        <img src={`${icon}`} alt='' sizes='30px' className='w-full h-40'/>
        
    </p>
    <div className='w-[100%] z-10 top-[-250px] h-56  relative opacity-0  hover:opacity-100 hover:top-[-400px]  ' >
        <AiFillPlayCircle size={70} className='absolute top-36 left-48 text-green-900' />
    </div>
</div>
);
};

export default Card;