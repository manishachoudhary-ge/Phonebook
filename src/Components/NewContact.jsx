import React from 'react'
import { useState } from 'react';
import { Button} from "@chakra-ui/react"
import {Input,Select,Box,VStack,Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
ModalBody, ModalFooter, useDisclosure} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useSelector, useDispatch } from 'react-redux';
import {createName, createMobileno, createAddress, creatework} from '../features/contactSlice';

function NewContact() {
  const {name, mobileNo, address,work } = useSelector((state)=>state.contacts);
  const dispatch = useDispatch();
   const { isOpen, onOpen, onClose } = useDisclosure();

  // const [showForm, setShowform] = useState(false);
   
  console.log({name});
  const handlesubmit = (event)=>{
    event.preventDefault();
    // setShowform(false);
    console.log({name, mobileNo, address, work});
     onClose();
    
   
  }
  
  return (
  
        <>
      <Button onClick={onOpen} colorScheme="teal">Create Contact</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Contact</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handlesubmit}>
            <ModalBody>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => dispatch(createName(e.target.value))}
                    placeholder="Enter your name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="tel"
                    value={mobileNo}
                    onChange={(e) => dispatch(createMobileno(e.target.value))}
                    placeholder="Enter your mobile number"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    value={address}
                    onChange={(e) => dispatch(createAddress(e.target.value))}
                    placeholder="Enter your address"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Work Category</FormLabel>
                  <Select
                    value={work}
                    onChange={(e) => dispatch(creatework(e.target.value))}
                    placeholder="Select work category"
                  >
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="friends">Friends</option>
                    <option value="family">Family</option>
                  </Select>
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit" mr={3}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>







  // <Box p={4}> 
  //     <Button onClick={() => setShowform(true)} colorScheme="teal"> 
  //       Create Contact
  //     </Button>

  //     {showForm && (
  //       <Box as="form" onSubmit={handlesubmit} mt={4} p={6} borderWidth="1px" borderRadius="lg" shadow="md"> 
  //         <VStack spacing={4}>
  //           <FormControl id="name"> 
  //             <FormLabel>Name:</FormLabel>
  //             <Input
  //               type="text"
  //               value={name}
  //               onChange={(e) => dispatch(createName(e.target.value))}
  //               placeholder="Enter Your Name"
  //             />
  //           </FormControl>

  //           <FormControl id="mobileNo">
  //             <FormLabel>Mobile Number:</FormLabel>
  //             <Input
  //               type="tel"
  //               value={mobileNo}
  //               onChange={(e) => dispatch(createMobileno(e.target.value))}
  //               placeholder="Enter Your Mobile Number"
  //             />
  //           </FormControl>

  //           <FormControl id="address">
  //             <FormLabel>Address:</FormLabel>
  //             <Input
  //               type="text"
  //               value={address}
  //               onChange={(e) => dispatch(createAddress(e.target.value))}
  //               placeholder="Enter your Address"
  //             />
  //           </FormControl>

  //           <FormControl id="work">
  //             <FormLabel>Work Category:</FormLabel>
  //             <Select
  //               name="work"
  //               value={work}
  //               onChange={(e) => dispatch(creatework(e.target.value))}
  //               placeholder="Select Work Category" 
  //             >
  //               <option value="work">Work</option>
  //               <option value="school">School</option>
  //               <option value="friends">Friends</option>
  //               <option value="family">Family</option>
  //             </Select>
  //           </FormControl>

  //           <Button type="submit" colorScheme="blue" width="full"> 
  //             Submit
  //           </Button>
  //         </VStack>
  //       </Box>
  //     )}
  //   </Box>
    
  )
}

export default NewContact























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


















 























