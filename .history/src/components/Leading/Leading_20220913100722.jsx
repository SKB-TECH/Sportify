import React ,{useContext,useEffect,useState} from 'react';
import Navbar from '../Header/Navbar';
import {StateContext} from '../context/ContextProfil';
import Sidbar from '../Sidebar/Sidbar';
import Card from './Card'
import Artists from '../Artists/Artists'

const Leading = () => {
        const {tokens,setTokens,music,setMusics,categori,setCategori}=useContext(StateContext)
        const [searchKey, setSearchKey] = useState("fally ipupa")
        const [type,setType]=useState("track,album,artist")
        const [artists,setArtist]=useState([]);
        const [chansons,setChansons] = useState([])

        const recherche=(e)=>{
            setSearchKey(e.target.value)
        }
        const categorisation=(e)=>{
            setCategori(e.target.value)
         }
        async function searchTracks(){
            const response =  await   fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=${type}`,
            {headers: {'Authorization':`Bearer ${tokens}`},"Content-Type":"application/json","method":"GET"
        });
        const data = await response.json();
        
        return data;
    }
        useEffect(() => {
            setTokens(window.localStorage.getItem('token'))
            searchTracks().then(data => {
                setMusics(data); 
                console.log(data) ;
                switch(categori){
                    case 'artist':
                        setArtist(data.artists.items) 
                    break

                    case 'album':
                        setChansons(data.albums.items)
                    break
                    
                    case 'track':
                        setChansons(data.tracks.items)
                    break

    
                }
                
            });
            
        },[categori,searchKey])


        return (
            <>
                <Navbar recupereValeur={recherche}/>
                <div className='flex justify-between'>
                    <div className='fixed'>
                        <Sidbar categoris={categorisation}/>
                    </div>
                    
                    <div className='flex mt-20 ml-80 flex-wrap w-50 h-10 gap-5 ' > 
                        {
                            chansons.map((item,index)=>(
                                categori !=="artist" ?(

                                    <Card 
                                        key={index}
                                        artist={item.name}
                                        ids={item.id}
                                        icon={
                                            (item.images && item.images[1].url)||(
                                            (item.album.images && item.album.images[1].url)
                                        )}
                                        index={index}
                                    />
                            ):(
                                <>
                                <Artists 
                                    key={index}
                                    image={item.images && item.images[1].url}
                                    name={item.name}
                                    followers={(item.followers)}
                                    ids={item.id}
                                />
                                </>
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