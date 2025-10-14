import React from "react";
import { useState } from "react";
import { IconButton , HStack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import EditContact from "./EditContact";

function ContactList() {
  const contactList = useSelector((state) => state.contacts.contactList);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  console.log(contactList);
  
  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(id));
    }
  };
  
  return (
    <>
    <TableContainer>
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone Number</Th>
            <Th></Th>
          </Tr>
          <Tr fontWeight="light"> 
            <Th>Contacts ({contactList.length})</Th><Th></Th>
          </Tr>
          
        </Thead>
        <Tbody>
          {contactList.length === 0 ? (
            <Tr>
              <Td colSpan={2} textAlign="center" color="gray.500">
                No contacts added yet.
              </Td>
            </Tr>
          ) : (
            contactList
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((contact, index) => (
                <Tr key={index} _hover={{ bg: "gray.50" }}>
                  <Td>
                    <Flex align="center" gap={3}>
                      <Avatar
                        size="sm"
                        name={contact.name}
                        bg="teal.400"
                        color="white"
                      />
                      <Text fontWeight="medium">{contact.name}</Text>
                    </Flex>
                  </Td>
                  <Td>{contact.mobileNo}</Td>
                  <Td textAlign="right">
                    {/* <HStack spacing={2} justifyContent="flex-end"> */}
                      <IconButton
                    icon={<EditIcon />}
                    colorScheme="teal"
                    size="sm"
                    onClick={() => handleEdit(contact)}
                  />
                     <IconButton
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => handleDelete(contact.id)}
                  />
                    {/* </HStack> */}
                  </Td>
                </Tr>
              ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
    <EditContact 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contact={selectedContact}
      />    </>
  );
}

export default ContactList;
