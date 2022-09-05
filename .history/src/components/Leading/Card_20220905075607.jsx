import React from 'react';
import{AiOutlineLike} from 'react-icons/ai'
import{AiFillPlayCircle} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'


const Card = ({icon,index,photo,id,url,}) => {
return ( <div  className='bg-gray-300 w-[20%] rounded h-60 shadow-2xl ml-5 overflow-hidden mt-5 p-3 hover:'> 

<span className='text-xl'>Album</span> 

    <p className='flex gap-2'>
        <AiOutlineLike size={25}/>
        <span className='text-gray-600 textxl'></span>
        <FcLike/>
        <span></span>
    </p>
    <div className='w-[100%] z-10 top-[-100px] h-56  relative opacity-0  hover:opacity-100 hover:top-[-190px] transition-all delay-150 ' >
        <AiFillPlayCircle size={70} className='absolute top-36 left-48 text-gray-900' />
    </div>
</div>
);
};

export default Card;