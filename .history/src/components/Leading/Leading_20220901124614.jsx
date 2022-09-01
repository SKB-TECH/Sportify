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
               
               <div className='w-full mt-20 flex flex-gap-5'>
            
                {/* <div className='w-60 h-40 bg-gray-200 rounded-lg shadow-lg ml-5 mt-10'>
                    Abedi
                </div> */
                    
                }
                 {menu.map((item, index) => 
                      (
                        <div className="flex gap-5 ml-5 mr-5 rounded  space-x-2 shadow-2xl" key={index}>
                        {<span className={`text-5xl text-gray-200 mt-5 ${open &&"rotate-[360deg] hover:scale-105"}`}>{item.icon}</span>}
                        <button className={`text-ColorText text-2xl mt-5 font-semibold ${!open && "scale-0 duration-300"}`}>{item.name}</button>
                        </div>
                    ))}
            
               </div>
               
            </div>
           
        </>
        
    );
};

export default Leading;