import React from 'react'
import Parent from './components/Parent' 
import State from './components/State'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    //Fragment Tag
    <>
  <Navbar/>
   <Routes>
    <Route path='/' element={<Parent/>}></Route>
    <Route path='/useState' element={<State/>}/>
   </Routes>
    </>
  )
}

export default App



