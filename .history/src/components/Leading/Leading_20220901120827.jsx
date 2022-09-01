import React ,{useContext,useEffect,useState} from 'react';
import Navbar from '../Header/Navbar';
import {StateContext} from '../context/ContextProfil';
import Sidbar from '../Sidebar/Sidbar';



const Leading = () => {

    const activeLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
    const {tokens,setTokens,music,setMusics}=useContext(StateContext)
    const [searchKey, setSearchKey] = useState("all")
    

    useEffect(() => {
          setTokens(window.localStorage.getItem('token'))
    }, [])

    const searchArtists = async (e) => {
        e.preventDefault()
        fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=artist`,
        {headers: {'Authorization':`Bearer ${tokens}`},"Content-Type":"application/json"
    })
        .then((reponse)=>{
            if(reponse.status===200){
               return reponse.json()
            }
        })
        .then((reponse)=>setMusics(reponse))
    }
   
    

    return (
        <>
            <Navbar search={searchArtists}/>
            <div className='flex justify-between '>
               <Sidbar/>
               
               <div className='w-full mt-20'>
                <h1 className='text-red-500 text-2xl text-center font-bold'>LES ARTISTS</h1>
               
                {
                    
                    
                }
               </div>
               
            </div>
           
        </>
        
    );
};

export default Leading;