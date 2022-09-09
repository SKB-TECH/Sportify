import React,{useState}  from 'react';
import{AiFillPlayCircle} from 'react-icons/ai'
import Modal from '../Modal/Modal';

const Card = ({icon,index,photo,ids,url,followers,artist,album}) => {
    const [active,setActive]=useState(false);

    const player=()=>{
        setActive(false)
        setActive(true)
    }
    return ( <>
    <div  className='box-content bg-gray-300 w-[20%] rounded h-80 shadow-2xl ml-5 overflow-hidden mt-5 p-3 hover:'> 
        <p className='flex flex-col gap-2'>
            <img src={`${icon}`} alt='' sizes='30px' />
            <div className="flex flex-col">
                <span className='text-gray-600 text-xl w-full'>{artist}</span>
                <span></
            </div>
        </p>
        <div key={index} className='w-[100%] z-10 top-[-250px] h-56  relative opacity-0  hover:opacity-100 hover:top-[-250px] transition-all delay-150 ' >
            <button onClick={()=>setActive(true)} className='absolute top-36 left-48 text-green-500 z-100' ><AiFillPlayCircle size={70}/></button>
        </div>
       
    </div>
       <Modal visible={active} id={ids}/>
    </>
);
};

export default Card;