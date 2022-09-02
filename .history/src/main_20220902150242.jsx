import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css';
import StateContextProvider from './components/context/ContextProfil'
ReactDOM.createRoot(document.getElementById('root')).render(
 
      <StateContextProvider>
          <App />
      </StateContextProvider>
  
)
