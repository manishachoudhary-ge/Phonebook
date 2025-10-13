import React, { useState, useEffect } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
  Button, FormControl, FormLabel, Input, Select, VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../features/contactSlice';

function EditContact({ contact, isOpen, onClose }) {
     const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState(contact);
  useEffect(() => {
    setEditedContact(contact);
  }, [contact]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editedContact) {
      dispatch(updateContact(editedContact));
      onClose();
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Contact</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleUpdate}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={editedContact.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  name="mobileNo"
                  value={editedContact.mobileNo}
                  onChange={handleInputChange}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" type="submit" mr={3}>
              Save Changes
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default EditContact







