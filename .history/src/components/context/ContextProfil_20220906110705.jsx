import { useContext,useState,useEffect,createContext } from "react";


export const StateContext=createContext();
const action={
    song:false,
    album:false,
    artiste:false,
    playlist:false
}

export const StateContextProvider=({children})=>{
    const [visible,setVisible]=useState(true)
    const [activeMenu,setActiveMenu] = useState(true)
    const [screensize,setScreensize]=useState('undefinid')
    const [categori,setCategori]=useState("tracks")
    const [profile,setProfile]=useState({})
    const [music,setMusics]=useState({})
    const [tokens, setTokens] = useState("")
    const clientID="137741501653-6bhfcfgk1n470aoc0ne84r7id9p840h8.apps.googleusercontent.com"
    
    
    return (
        <StateContext.Provider value={
            {
            activeMenu
            ,setActiveMenu,
            music,
            visible,
            setVisible,
            tokens, 
            setTokens,
            setMusics,
            screensize,
            setScreensize,
            profile,setProfile,
            clientID,
            categori,
            setCategori
        }
        }>
        {children}
        </StateContext.Provider>
    )
}
export default StateContextProvider;