import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Accueil from './components/Header/Accueil';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Error from './components/Error/Error';
import Navbar from './components/Header/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Main' element={<Main/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    )
};

export default App;