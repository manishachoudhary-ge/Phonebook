import React from 'react'
import { useState } from 'react';
import { Button} from "@chakra-ui/react"
import {Input,Select,Box,VStack,} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useSelector, useDispatch } from 'react-redux';
import {createName, createMobileno, createAddress, creatework} from '../features/contactSlice';

function NewContact() {
  const {name, mobileNo, address,work } = useSelector((state)=>state.contacts);
  const dispatch = useDispatch();

  const [showForm, setShowform] = useState(false);

  const handlesubmit = (event)=>{
    event.preventDefault();
    setShowform(false);
    console.log({name, mobileNo, address, work});
    
   
  }
  return (
  <Box p={4}> 
      <Button onClick={() => setShowform(true)} colorScheme="teal"> 
        Create Contact
      </Button>

      {showForm && (
        <Box as="form" onSubmit={handlesubmit} mt={4} p={6} borderWidth="1px" borderRadius="lg" shadow="md"> 
          <VStack spacing={4}>
            <FormControl id="name"> 
              <FormLabel>Name:</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => dispatch(createName(e.target.value))}
                placeholder="Enter Your Name"
              />
            </FormControl>

            <FormControl id="mobileNo">
              <FormLabel>Mobile Number:</FormLabel>
              <Input
                type="tel"
                value={mobileNo}
                onChange={(e) => dispatch(createMobileno(e.target.value))}
                placeholder="Enter Your Mobile Number"
              />
            </FormControl>

            <FormControl id="address">
              <FormLabel>Address:</FormLabel>
              <Input
                type="text"
                value={address}
                onChange={(e) => dispatch(createAddress(e.target.value))}
                placeholder="Enter your Address"
              />
            </FormControl>

            <FormControl id="work">
              <FormLabel>Work Category:</FormLabel>
              <Select
                name="work"
                value={work}
                onChange={(e) => dispatch(creatework(e.target.value))}
                placeholder="Select Work Category" 
              >
                <option value="work">Work</option>
                <option value="school">School</option>
                <option value="friends">Friends</option>
                <option value="family">Family</option>
              </Select>
            </FormControl>

            <Button type="submit" colorScheme="blue" width="full"> 
              Submit
            </Button>
          </VStack>
        </Box>
      )}
    </Box>



  

    // <div>
    //   <div>
    //     <Button onClick={()=>{setShowform(true)}} >Create Contact</Button>
    //     {/* <button onClick={()=>{setShowform(true)}}>Create Button</button> */}
    //   </div>
      
    //     {showForm && <form onSubmit={handlesubmit} >
    //       <div>
    //         <label htmlFor="name">Name: </label>
    //         <input type="text" value={name} onChange={(e)=> {dispatch(createName(e.target.value))}} placeholder='Enter Your Name'/>
    //         </div>
    //         <input type="tel" value={mobileNo} onChange={(e)=>{dispatch(createMobileno(e.target.value))}} placeholder='Enter Your Mobile Number' />
    //         <input type="text" value={address} onChange={(e)=>{dispatch(createAddress(e.target.value))}} placeholder='Enter your Address'/>
    //         <select name="work" value={work} onChange={(e)=>{ dispatch(creatework(e.target.value))}} id="label">
    //             <option value="work">Work</option>
    //             <option value="school">School</option>
    //             <option value="friends">Friends</option>
    //             <option value="family">Family</option>
    //         </select>
    //         <button type='submit'>Submit</button>

    //     </form>}
    // </div>
  )
}

export default NewContact










































