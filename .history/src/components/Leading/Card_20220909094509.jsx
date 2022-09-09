import React,{useState,useContext}  from 'react';
import{AiFillPlayCircle} from 'react-icons/ai'
import {StateContext} from '../context/ContextProfil';

const Card = ({props}) => {
    const [active,setActive]=useState(false);
    const [close,setClose]=useState(true);
    const {categori,setCategori}=useContext(StateContext)
    
    const player=()=>{
        setActive(true)
        setClose(false)
    }

    const quit=()=>{
        setActive(false)
        setClose(true)
    }
    return ( <>
    <div  className='box-content bg-gray-300 w-[20%] rounded h-80 shadow-2xl ml-5 overflow-hidden mt-5 p-3 relative'> 
        <p className='flex flex-col gap-2 flex-wrap'>
            <img src={`${props.icon}`} alt=''/>
            <div className="flex flex-col">
                <span className='text-gray-900 text-xl font-bold w-full'>{artist}</span>
                
            </div>
        </p>
        <div key={index} className='w-[100%] z-10 top-[-250px] h-56  relative opacity-0  hover:opacity-100 hover:top-[-250px] transition-all delay-150 ' >
            {
                close && <button onClick={player} className='absolute top-36 left-48 text-green-500 z-100' ><AiFillPlayCircle size={70}/></button>
            }
        </div>
       
    </div>
    {
        active && 
        
        <div style={{ position: 'absolute', bottom: 0, top:300,left:500, zIndex: 100}} className="w-[40%] h-80">
            
            <button onClick={quit} className="text-gray-900 text-2xl font-bold">X</button>
            <iframe style={{borderRadius:"12px"}} 
            src={`https://open.spotify.com/embed/${categori}/${ids}?utm_source=generator`}
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
       }
    </>
);
};

export default Card;