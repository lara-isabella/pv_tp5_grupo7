import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Inicio from "./assets/components/inicio"

function App() {

  return (
      <div>
        <Routes>
        <Route path="/" element={ <Inicio /> } />
        </Routes>
      </div>
      
  )
}

export default App
