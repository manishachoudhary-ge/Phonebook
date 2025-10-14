import React, { useState, useEffect } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter, Button, FormControl, FormLabel,
  Input, Select, VStack, HStack, Avatar
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../features/contactSlice';

function EditContact({ isOpen, onClose, contact }) {
  const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState(contact || {});
  const [preview, setPreview] = useState(contact?.avatar || ''); 
  const [errors, setErrors] = useState({ name: "", mobileNo: "",});

  

  useEffect(() => {
    if (contact) {
      setEditedContact(contact);
      setPreview(contact.avatar || '');
    }
  }, [contact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
    
    if (name === 'avatar') setPreview(value);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file)); 

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'phonebook_preset'); 

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dpmtrgjj6/image/upload', 
        { method: 'POST', body: formData }
      );
      const data = await res.json();
      setEditedContact({ ...editedContact, avatar: data.secure_url }); 
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  const handleUpdate = () => {
     if (!validate()) return;
    dispatch(updateContact(editedContact));
    onClose();
  };

  if (!contact) return null;

  const validate = () => {
  if (!editedContact.name || editedContact.name.trim() === '') {
    alert("Name is required");
    return false;
  }
  if (!/^[A-Za-z\s]+$/.test(editedContact.name)) {
    alert("Name can only contain alphabets and spaces");
    return false;
  }

  if (!editedContact.mobileNo || editedContact.mobileNo.trim() === '') {
    alert("Mobile number is required");
    return false;
  }
  if (!/^\d{10}$/.test(editedContact.mobileNo)) {
    alert("Mobile number must be exactly 10 digits");
    return false;
  }


  return true; 
};


  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={editedContact.name}
                onChange={handleInputChange}
              />
              {errors.name && (
    <Box color="red.500" fontSize="sm">{errors.name}</Box>
  )}
            </FormControl>

            <HStack>
              <Avatar name={editedContact.name} src={preview} size="md" />
              <VStack>
                {/* <FormControl>
                  <FormLabel>Avatar URL</FormLabel>
                  <Input
                    name="avatar"
                    value={editedContact.avatar}
                    onChange={handleInputChange}
                  />
                </FormControl> */}
                <FormControl>
                  <FormLabel>Upload Avatar</FormLabel>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </FormControl>
              </VStack>
            </HStack>

            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
              type="number"
                name="mobileNo"
                value={editedContact.mobileNo}
                onChange={handleInputChange}
              />
               {errors.mobileNo && (
    <Box color="red.500" fontSize="sm">{errors.mobileNo}</Box>
  )}
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                name="address"
                value={editedContact.address}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Work Category</FormLabel>
              <Select
                name="work"
                value={editedContact.work}
                onChange={handleInputChange}
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
          <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
            Save Changes
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditContact;














































// import React, { useState, useEffect } from 'react';
// import {
//   Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
//   Button, FormControl, FormLabel, Input, Select, VStack,
//   HStack, Avatar 
// } from '@chakra-ui/react';
// import { useDispatch } from 'react-redux';
// import { updateContact } from '../features/contactSlice';

// function EditContact({ isOpen, onClose, contact }) {
//      const dispatch = useDispatch();
//   const [editedContact, setEditedContact] = useState(contact);

//   useEffect(() => {
//     setEditedContact(contact);
//   }, [contact]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedContact({ ...editedContact, [name]: value });
//   };

//   const handleUpdate = () => {
//       dispatch(updateContact(editedContact));
//       onClose();
//   };
//   return (
//     <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Edit Contact</ModalHeader>
//         <ModalCloseButton />
//           <ModalBody>
//             <VStack spacing={4}>
//               <FormControl isRequired>
//                 <FormLabel>Name</FormLabel>
//                 <Input
//                   name="name"
//                   value={editedContact.name}
//                   onChange={handleInputChange}
//                 />
//               </FormControl>
//               <HStack>
//                 <Avatar name={editedContact.name} src={editedContact.avatar} />
//                 <FormControl>
//                   <FormLabel>Avatar URL</FormLabel>
//                   <Input 
//                    name='avatar'
//                    value={editedContact.avatar}
//                    onChange={handleInputChange}
//                     />
//                   </FormControl>
//                 </HStack>
//               <FormControl isRequired>
//                 <FormLabel>Phone Number</FormLabel>
//                 <Input
//                   name="mobileNo"
//                   value={editedContact.mobileNo}
//                   onChange={handleInputChange}
//                 />
//               </FormControl>
//               <FormLabel>Address</FormLabel>
//               <Input
//               name="address"
//               value={editedContact.address}
//               onChange={handleInputChange}
//                />
//                <FormControl/>
//                <FormControl>
//                 <FormLabel>Work Category</FormLabel>
//                 <Select 
//                   name="work"
//                   value={editedContact.work}
//                   onChange={handleInputChange}
//                   >
//                   <option value="work">Work</option>
//                   <option value="school">School</option>
//                   <option value="friends">Friends</option>
//                   <option value="family">Family</option>
//                   </Select>
//                   </FormControl>
//             </VStack>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" type="submit" mr={3} onClick={handleUpdate}>
//               Save Changes
//             </Button>
//             <Button variant="ghost" onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default EditContact;





