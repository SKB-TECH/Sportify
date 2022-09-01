import React ,{useContext,useEffect} from 'react';
import Navbar from '../Header/Navbar';
import {StateContext} from '../context/ContextProfil';
import Sidbar from '../Sidebar/Sidbar';



const Leading = () => {

    const activeLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink ="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
    const {tokens,setTokens}=useContext(StateContext)


    useEffect(() => {
          setTokens(window.localStorage.getItem('token'))
    }, [])

    const searchArtists = async (e) => {
        e.preventDefault()
        
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${tokens}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
    
        setArtists(data.artists.items)
    }


    return (
        <>
            <Navbar/>
            <div className='flex justify-between'>
               <Sidbar/>
               <div>Principale</div>
            </div>
           
        </>
        
    );
};

export default Leading;