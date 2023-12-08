import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useThemeHook } from './GlobalComponent/theprovider'



function App() {

  const [theme]= useThemeHook();

  return (
    <>
      <main className={theme? 'bg-black':'bg-light-2'} style={{height:'100vh',overflowY:'auto'}}>
        <Headers>

        </Headers>
      </main>
      
    </>
  )
}

export default App
