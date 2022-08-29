import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Leading from './components/Leading/Leading';
import Error from './components/Error/Error';


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Leading' element={<Leading/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    )
};

export default App;