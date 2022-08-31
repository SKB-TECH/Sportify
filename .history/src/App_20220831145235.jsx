import React from 'react';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';

import Login from './components/Login/Login';
import Leading from './components/Leading/Leading';
import Error from './components/Error/Error';
import Accueil from './components/Header/Accueil';

const App = () => {
  return (
    <BrowserRouter>
    <Link>Accueil</Link>
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