import React from 'react';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';

import Login from './components/Login/Login';
import Leading from './components/Leading/Leading';
import Error from './components/Error/Error';
import Accueil from './components/Header/Accueil';
import { useEffect,useContext } from 'react';
import { StateContext } from './components/context/ContextProfil';



const App = () => {
const {tokens,seTtokens}=useContext(StateContext)
setT
  useEffect(() => {
    console.log("je monte deja");
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
   
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
       
        window.location.hash = ""
        window.localStorage.setItem("token",token)
        console.log(token)
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