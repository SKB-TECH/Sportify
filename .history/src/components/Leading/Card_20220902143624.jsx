import React from 'react';

const Card = () => {
return (
<div key={index} className='bg-gray-300 w-[20%] rounded h-60 shadow-2xl ml-5 overflow-hidden mt-5 p-3 hover:'> 
<img src={item.images[1]?.url} alt="" className='w-full h-32 object-cover text-sm' style={{fontSize:"20px"}}/>
<span className='text-xl'>{items.album} </span> 
    <p className='flex gap-2'>
        <AiOutlineLike size={25}/>
        <span className='text-gray-600 textxl'>{item.followers.total}</span>
        <FcLike/>
        <span>{item.popularity}</span>
    </p>
    <div className='w-[100%] z-10 top-[-100px] h-56  relative opacity-0  hover:opacity-100 hover:top-[-190px] transition-all delay-150 ' >
        <AiFillPlayCircle size={70} className='absolute top-36 left-48 text-gray-900' />
    </div>
</div>
);
};

export default Card;