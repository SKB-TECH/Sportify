import React ,{useEffect,useState,use}from 'react';
import {SiMusicbrainz} from 'react-icons/si'
import Leading from '../Leading/Leading';
import { useNavigate } from 'react-router-dom';






const Accueil = () => {
    const navigate=useNavigate("")
    //les identites pour la connexion de spotify
    const CLIENT_ID="4718acf732be4a25aad302598974a92b"
    const REDIRECT_URI ="http://localhost:5173/callback/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const btnStyle='py-2 px-4 bg-green-500 text-white font-semibold rounded-3xl shadow-md mb-4 hover:border-2xl'
    return (
        <div className='flex justify-center items-center mt-40'>
            <div className='w-[30%] bg-gray-900 h-fit flex flex-col gap-10 justify-center items-center rounded-xl shadow-2xl'>
                
                <div className='font-bold text-2xl flex mt-5'>
                        <span><SiMusicbrainz size={50} style={{color:"white"}}/></span>
                        <span className='text-white mt-2'>SKB-</span>
                        <span className='text-green-500 mt-2'>MUSIC</span>
                </div>
                <div className='flex-col justify-center items-center'>
                    <h1 className='text-gray-100 font-bold text-2xl text-center'>Millions of Songs.</h1>
                    <h1 className='text-gray-100 font-bold text-2xl text-center'>Free on Skb-Music.</h1>
                </div>
                
                <div>
                   <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className={btnStyle}>
                    Login to Spotify</a>
                </div>
            </div>
        </div>
    );
}

export default Accueil;