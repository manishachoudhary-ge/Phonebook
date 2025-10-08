import React from 'react'
import { useState } from 'react';

function NewContact() {
  const [showForm, setShowform] = useState(false);

  const [name, setName] = useState("");
  const [mobileno, setMobileno] = useState("");  
  const [address, setAdress] = useState("");
  const [work, setWork] = useState("");

  const handlesubmit = (event)=>{
    event.preventDefault();
    console.log({name})
  }
  return (

    <div>
      <div>
        <button onClick={()=>{setShowform(true)}}>Create Button</button>
      </div>
      
        {showForm && <form onSubmit={handlesubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}} placeholder='Enter Your Name'/>
            </div>
            <input type="tel" value={mobileno} onChange={(e)=>{setMobileno(e.target.value)}} placeholder='Enter Your Mobile Number' />
            <input type="text" value={address} onChange={(e)=>{setAdress(e.target.value)}} placeholder='Enter your Address'/>
            <select name="work" value={work} onChange={(e)=>{ setWork(e.target.value)}} id="label">
                <option value="work">Work</option>
                <option value="school">School</option>
                <option value="friends">Friends</option>
                <option value="family">Family</option>
            </select>
            <button type='submit'>Submit</button>

        </form>}
    </div>
  )
}

export default NewContact











// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// function NewContact() {
//     const [name, setName] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Submitted name:', name);
//   return (
//     <div>NewContact</div>
//   )
// }
// }
// export default NewContact



// function MyForm() {
//     <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300 }}>
//       <TextField
//         label="Name"
//         variant="outlined"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         fullWidth
//       />
//       <Button type="submit" variant="contained">
//         Submit
//       </Button>
//     </Box>
  
//   };




 