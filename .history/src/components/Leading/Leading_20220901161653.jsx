import React ,{useContext,useEffect,useState} from 'react';
import Navbar from '../Header/Navbar';
import {StateContext} from '../context/ContextProfil';
import Sidbar from '../Sidebar/Sidbar';



const Leading = () => {

    const activeLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
    const {tokens,setTokens,music,setMusics}=useContext(StateContext)
    const [searchKey, setSearchKey] = useState("koffi Olomide")
    const [type,setType]=useState("artist")

    const recherche=(e)=>{
        setSearchKey(e.target.value)
    }

    const Type=(e)=>{
        setType(e.target.value)
    }

    useEffect(() => {
        setTokens(window.localStorage.getItem('token'))
        async(e) => {
            e.preventDefault()
            fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=${type}`,
            {headers: {'Authorization':`Bearer ${tokens}`},"Content-Type":"application/json"
        })
            .then((reponse)=>{
                if(reponse.status===200){
                return reponse.json()
                }
            })
            .then((reponse)=>setMusics(reponse.artists.items))
    }
    }, [music])
    const searchArtist= async(e) => {
        e.preventDefault()
        fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=${type}`,
        {headers: {'Authorization':`Bearer ${tokens}`},"Content-Type":"application/json"
    })
        .then((reponse)=>{
            if(reponse.status===200){
            return reponse.json()
            }
        })
        .then((reponse)=>setMusics(reponse.artists.items))
}
    
   //const items=



    return (
        <>
            <Navbar search={searchArtist} valeur={recherche}/>
            <div className='flex justify-between '>
               <Sidbar valeur={Type}/>
               
               <div className='flex mt-20 flex-wrap justify-center items-center w-30 gap-5 '> 
                {
                   music.map((item,index)=>(
                    <div key={index} className='bg-gray-200 rounded-lg shadow-2xl'> 
                         <img src={item.images[2]?.url} alt=""/>
                         <span>{item.name} </span> 
                    </div>
                   ))
                }
               </div>
            </div>
           
        </>
        
    );
};

export default Leading;