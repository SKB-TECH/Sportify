import React ,{useContext,useEffect,useState} from 'react';
import Navbar from '../Header/Navbar';
import {StateContext} from '../context/ContextProfil';
import Sidbar from '../Sidebar/Sidbar';
import Card from './Card'


const Leading = () => {

        const activeLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
        const normalLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
        const {tokens,setTokens,music,setMusics}=useContext(StateContext)
        const [searchKey, setSearchKey] = useState("fally ipupa")
        const [type,setType]=useState("track,album,artist")
        const [chansons,setChansons] = useState([])

        const recherche=(e)=>{
            setSearchKey(e.target.value)
        }

        const Type=(e)=>{
            setType(e.target.value)
        }
        async function searchTracks(){
            const response =  await   fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=${type}`,
            {headers: {'Authorization':`Bearer ${tokens}`},"Content-Type":"application/json","method":"GET"
        });
        const data = await response.json();
        //  setMusics(data.tracks.items); 
        return data;
         // .then((reponse)=>{
            //     if(reponse.status===200){
            //     return reponse.json()
            //     }
            // })
            // .then((reponse)=>setMusics(reponse.tracks.items)   

    }
        useEffect(() => {
            setTokens(window.localStorage.getItem('token'))
            searchTracks().then(data => {
                setMusics(data); 
                setChansons(data.tracks.items)
                
                //console.log(data.tracks.items)
                
            });
            
        },[])

        {
            chansons.map((items,index)=>{
                console.log(items.artists[0].name)
            })
        }
        return (
            <>
                <Navbar valeur={recherche}/>
                <div className='flex justify-between '>
                <div className='fixed'>
                <Sidbar valeur={Type}/>
                </div>
                
                 <div className='flex ml-80 mt-20 flex-wrap w-50 h-10 gap-5 '> 
                    
                    {
                       
                        chansons.map((items)=>(
                        
                            items.artists.map((item,index)=>(<Card key={index} artist={item.name}/>)
                           
                        )
                        )
                        )
                    } 
                
                </div> 
               
                </div>
            
            </>
            
    );
};

export default Leading;