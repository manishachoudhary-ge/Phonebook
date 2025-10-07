import React from 'react'
import { useState } from 'react';
import './logopb.css';
import NewContact from './NewContact';


function Navpb() {
  const [showcomponent, setShowcomponent] = useState(false);

  const handleSubmit = ()=>{
    setShowcomponent(true);
  }

  return (
    <div>
       <div className='navbr'>
        <p>Phonebook</p>
         <input type="search" placeholder='Search' /> <br />
         <div>
         <button onClick={{handleSubmit}}>Create contact</button>
          {showcomponent && <NewContact/>}
         </div>
         {/* <button>Create contact</button> */}
        </div>
        {/* {<NewContact />} */}
    </div>
  )
}

export default Navpb




