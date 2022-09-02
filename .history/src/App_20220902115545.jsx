import React from 'react';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Login from './components/Login/Login';
import L

import Accueil from './components/Header/Accueil';
import { useEffect,useContext } from 'react';
import { StateContext } from './components/context/ContextProfil';



const App = () => {
const {tokens,setTokens}=useContext(StateContext)
  useEffect(() => {
    
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
       
        window.location.hash = ""
        window.localStorage.setItem("token",token)
        setTokens(token)
    }
    
  },[])

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Leading' element={<Leading/>}/>
          <Route path='/Accueil' element={<Accueil/>}/>
          <Route path='*' element={<Leading/>}/>
          
      </Routes>
    </BrowserRouter>
    )
};

export default App;