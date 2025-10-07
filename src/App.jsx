import { useState } from 'react'
import Navpb from './Components/Navpb';
import List from './Components/List';
import inputSearch from './Components/inputSearch';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Appmaincom'>
        <div>
        <Navpb />
        <List />
        <inputSearch />
        
    
        </div>
      </div>
     
    </>
  )
}

export default App
