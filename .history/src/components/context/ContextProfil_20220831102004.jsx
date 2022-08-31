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

    // const handlClick=(checked)=>{
    //     setIsCliked({...InitialState,[checked]:true})
    // setIsCliked, iscliked,
    //         handlClick,
    // }
    return (
        <StateContext.Provider value={
            {activeMenu
            ,setActiveMenu,
           
            
            screensize,
            setScreensize,
            profile,setProfile
        }
        }>
        {children}
        </StateContext.Provider>
    )
}
export default StateContextProvider