import React ,{useEffect,useState}from 'react';
import {GoogleLogin} from 'react-google-login'
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import Leading from '../Leading/Leading';
import {StateContext} from '../context/ContextProfil';
import { useContext } from 'react';
import Accueil from '../Header/Accueil';


const Login = () => {
    //chargement de l'api
    const [statut,setStatut]=useState(false)
    const {profile,setProfile} = useContext(StateContext);
    const navigate=useNavigate('')
    const clientID="137741501653-6bhfcfgk1n470aoc0ne84r7id9p840h8.apps.googleusercontent.com"
    
    useEffect(() => 
    {
        const initClient = () => {
            gapi.client.init({
                clientId: clientID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
        
    },[])
    
    //Quand la connexion reussie
    const onSuccess = (res) => {
        setProfile(res);
        setStatut(true)
    };
    
    //Quand la connexion echoue
    const onFailure = ( err ) => {
        //setProfile(null)
        setStatut(false)
        navigate('/')
    }
    //Deconnexion
    const logOut = () => {
        setStatut(false);
    };

    return (
        
            statut ? (<Accueil/>):
            
            (<div className='flex justify-center items-center mt-10'>
            <form className="bg-white w-[30%] mr-10  shadow-lg p-10 rounded-lg gap-4 mb-2 flex flex-col justify-between  items-center">
            <h1 className='text-gray-900 text-xl font-bold'>Connectez-vous</h1>
                <div className='flex flex-col text-xl gap-4 text-black w-full'>
                    <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  w-full' placeholder='shakokinyamba201@gmail.com'/>
                    <input type="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  w-full' placeholder='**********'/>
                <button className='bg-green-500 text-gray-100 font-semibold  border border-gray-300 p-2.5 rounded-lg'>Connexion</button>
                </div>
                <GoogleLogin
                    clientId={clientID}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </form> 
        </div>)
    
    )
    
}
export default Login;