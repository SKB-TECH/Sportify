import { useContext,useState,useEffect,createContext } from "react";


export const StateContext=createContext();
const action={
    song:false,
    album:false,
    artiste:false,
    playlist:false
}


export const StateContextProvider=({children})=>{
    const [activeMenu,setActiveMenu] = useState(true)
    const [tache,setTache]=useState(action)
    const [screensize,setScreensize]=useState('undefinid')
    const [profile,setProfile]=useState({})
    const [music,setMusics]=useState({})
    const [token, setToken] = useState("")


    return (
        <StateContext.Provider value={
            {activeMenu
            ,setActiveMenu,
            music,
            token, 
            setToken,
            setMusics,
            screensize,
            setScreensize,
            profile,setProfile
        }
        }>
        {children}
        </StateContext.Provider>
    )
}
export default StateContextProvider;