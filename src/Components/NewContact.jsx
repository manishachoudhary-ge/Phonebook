import React from 'react'

function NewContact() {
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Enter Your Name'/>
            <input type="tel" placeholder='Enter Your Mobile Number' />
            <input type="text" placeholder='Enter your Address'/>
            <input type="text" placeholder='enter the address' />
            <select name="work" id="label">
                <option value="work">Work</option>
                <option value="school">School</option>
                <option value="friends">Friends</option>
                <option value="family">Family</option>
            </select>

        </form>
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




 