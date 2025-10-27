import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Button} from "@chakra-ui/react"
import { AddIcon,  HStack, Icon, Text } from "@chakra-ui/icons";
import {Input,Select,Box,VStack,Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
ModalBody, ModalFooter, useDisclosure} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
// import { useSelector, useDispatch } from 'react-redux';
// import {createContact, addContact} from '../features/contactSlice';
// import { current } from '@reduxjs/toolkit';
const baseUrl = import.meta.env.VITE_BASE_URL;

function NewContact({ addContactToList, contacts }) {
  // const { currentContact  } = useSelector((state)=>state.contacts);
  // const dispatch = useDispatch();
 const [uploading, setUploading] = useState(false);
 const { isOpen, onOpen, onClose } = useDisclosure();
//  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
  name: '',
  mobileNo: '',
  address: '',
  workCategory: '',
  avatar: ''
});
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[a-zA-Z\s]*$/;

    if (nameRegex.test(value)) {
      // dispatch(createContact({ field: 'name', value: value }));
       handleChange(e);
    }
  };
    

    const handlesubmit = async (e) => {
    e.preventDefault();
   

    
    const contactToCreate = { ...formData };
    const { name, mobileNo, address, workCategory, avatar } = contactToCreate;

    if (!name.trim()) {
      alert("Name is required");
      return;
    }
    if (!mobileNo.trim() || mobileNo.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }
  //   const isDuplicate = contacts.some(
  //   (contact) => contact.mobileNo === mobileNo
  // );

  // if (isDuplicate) {
  //   alert("A contact with this mobile number already exists.");
  //   return;
  // }
    if (!workCategory.trim()) {
      alert("Work Category is required");
      return;
    }
    console.log("Sending contact data:", contactToCreate);
    // console.log("Sending contact data:", { name, mobileNo, address, workCategory, avatar });


    try {
      const response = await axios.post(`${baseUrl}/create`, {
        name,
        MobileNo: mobileNo, 
        address,
        workCategory,
        avatar
      });
      // console.log("Contact created:", response.data);

      const created = response.data.data;
      // console.log("To check key :",created);
      if (created) {
        // await addContactToList(created);
        await addContactToList();

        // alert("Contact created successfully!");
      }
      setFormData({
        name: '',
        mobileNo: '',
        address: '',
        workCategory: '',
        avatar: ''
      });
      
      onClose(); 
      
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else{
      console.error("Error creating contact:", error.message); /*error.response?.data || */
      alert("Failed to create contact. Please try again.");
      }
    }
  };

 
//   const handlesubmit = (event)=>{
//     event.preventDefault();
//      const { name, mobileNo, Work } = currentContact;

//   if (!name.trim()) {
//     alert("Name is required");
//     return;
//   }

//   if (!mobileNo.trim()) {
//     alert("Mobile Number is required");
//     return;
//   }  else if (currentContact.mobileNo.length !== 10) {
//   alert("Mobile number must be exactly 10 digits");
//   return;
// }

//   if (!Work.trim()) {
//     alert("Work Category is required");
//     return;
//   }

//     dispatch(addContact());
//      onClose();
    
//   }

   const handleFileUpload = async (e) => {
    const file = e.target.files[0]; 
    if (!file) return;

     setUploading(true);

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
      // dispatch(createContact({ field: "avatar", value: data.secure_url }));
      setFormData(prev => ({ ...prev, avatar: data.secure_url }));
    
    } catch (err) {
      console.error("Upload failed:", err);
    }finally {
    setUploading(false);
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
                  name="name"
                    // value={currentContact.name}
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="tel"
                    name='mobileNo'
                    // value={currentContact.mobileNo}
                    value={formData.mobileNo}
                    // onChange={(e) => dispatch(createContact({ field: 'mobileNo', value: e.target.value }))}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    name='address'
                    // value={currentContact.address}
                    value={formData.address}
                    // onChange={(e) => dispatch(createContact({ field: 'address', value: e.target.value }))}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Work Category</FormLabel>
                  <Select
                  name='workCategory'
                    // value={currentContact.Work}
                    value={formData.workCategory}
                    // onChange={(e) => dispatch(createContact({ field: 'Work', value: e.target.value }))}
                    onChange={handleChange}
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
                      src={formData.avatar}
                      alt="avatar"
                      style={{ width: "60px", height: "60px", borderRadius: "50%", marginTop: "5px" }}
                    />
                    )} */}

                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit" mr={3} isLoading={uploading} disabled={uploading}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
    
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


















 























