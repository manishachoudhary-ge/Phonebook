import React from 'react'
import { Button} from "@chakra-ui/react"
import { AddIcon,  HStack, Icon, Text } from "@chakra-ui/icons";
import {Input,Select,Box,VStack,Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
ModalBody, ModalFooter, useDisclosure} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useSelector, useDispatch } from 'react-redux';
import {createContact, addContact} from '../features/contactSlice';
import { current } from '@reduxjs/toolkit';

function NewContact() {
  const { currentContact  } = useSelector((state)=>state.contacts);
  const dispatch = useDispatch();
   const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[a-zA-Z\s]*$/;

    if (nameRegex.test(value)) {
      dispatch(createContact({ field: 'name', value: value }));
    }
  };
  
  // const API_BASE_URL = 'http://localhost:5000";

  //     const fetchData = async () => {
  //         try {
  //           const response = await axios.post('http://localhost:5000/user/create'); 
  //            return res.
  //         } catch (err) {
  //           console.log(err);
  //       };
  // useEffect(() => {
  //       fetchData();
  //     }, []);
      // const createData = axios.get("http://localhost:5000/user")

  
 
  const handlesubmit = (event)=>{
    event.preventDefault();
     const { name, mobileNo, Work } = currentContact;

  if (!name.trim()) {
    alert("Name is required");
    return;
  }

  if (!mobileNo.trim()) {
    alert("Mobile Number is required");
    return;
  }  else if (currentContact.mobileNo.length !== 10) {
  alert("Mobile number must be exactly 10 digits");
  return;
}

  if (!Work.trim()) {
    alert("Work Category is required");
    return;
  }

    dispatch(addContact());
     onClose();
    
  }

   const handleFileUpload = async (e) => {
    const file = e.target.files[0]; 
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "phonebook_preset"); 
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dpmtrgjj6/image/upload", 
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      dispatch(createContact({ field: "avatar", value: data.secure_url }));
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };
  
  return (
  
        <>
      <Button onClick={onOpen} variant="outline" borderRadius="full"  borderColor="gray.300"  bg="white"  color="black" boxShadow="sm" px={4}
      py={2}>
         <HStack spacing={2}>
        <Icon as={AddIcon} color="red.200" boxSize={3.5} />
        <Text fontWeight="medium">Create contact</Text>
      </HStack>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Contact</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handlesubmit}>
            <ModalBody>
              <VStack spacing={4}>
                <FormControl isRequired >
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={currentContact.name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="number"
                    value={currentContact.mobileNo}
                    onChange={(e) => dispatch(createContact({ field: 'mobileNo', value: e.target.value }))}
                    placeholder="Enter your mobile number"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    value={currentContact.address}
                    onChange={(e) => dispatch(createContact({ field: 'address', value: e.target.value }))}
                    placeholder="Enter your address"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Work Category</FormLabel>
                  <Select
                    value={currentContact.Work}
                    onChange={(e) => dispatch(createContact({ field: 'Work', value: e.target.value }))}
                    placeholder="Select work category"
                  >
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="friends">Friends</option>
                    <option value="family">Family</option>
                  </Select>
                </FormControl>
                 <FormControl>
                  <FormLabel>Upload Avatar</FormLabel>
                  <Input type="file" accept="image/*" onChange={handleFileUpload} />
                  {/* {currentContact.avatar
                   && (
                    <img
                      src={currentContact.avatar}
                      alt="avatar"
                      style={{ width: "60px", height: "60px", borderRadius: "50%", marginTop: "5px" }}
                    />
                    )} */}

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
    //         <input type="text" value={address} onChdispatchange={(e)=>{dispatch(createAddress(e.target.value))}} placeholder='Enter your Address'/>
    //         <select name="work" value={work} onChange={(e)=>{ dispatch(creatework(e.target.value))}} id="label">
    //             <option value="work">Work</option>
    //             <option value="school">School</option>
    //             <option value="friends">Friends</option>
    //             <option value="family">Family</option>
    //         </select>
    //         <button type='submit'>Submit</button>

    //     </form>}
    // </div>


















 























