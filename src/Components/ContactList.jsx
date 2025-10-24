import React from "react";
import { IconButton , HStack } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
// import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

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
import { deleteContact } from "../features/contactSlice";

const baseUrl = import.meta.env.VITE_BASE_URL;
// const [contactList, setContactList] = useState([]);
// useEffect(() => {
//   const fetchContacts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/user/list");
//       setContactList(res.data.user); 
//     } catch (err) {
//       console.error("Error fetching contacts:", err);
//     }
//   };

//   fetchContacts();
// }, []);
// const handleDelete = async (id) => {
//   if (window.confirm("Are you sure?")) {
//     try {
//       await axios.post(`http://localhost:5000/user/delete/${id}`);
//       setContactList(contactList.filter((c) => c._id !== id)); 
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   }
// };

// const handleUpdate = async () => {
//   if (!validate()) return;

//   try {
//     const res = await axios.post(`http://localhost:5000/user/update/${editedContact._id}`, {
//       ...editedContact
//     });
//     console.log("Updated:", res.data);
//     onClose();
//   } catch (err) {
//     console.error("Update failed:", err);
//   }
// };


function ContactList({ contacts = [],  totalContacts = 0, updateContactInList, removeContactFromList }) {
  // const {contactList, searchTerm } = useSelector((state) => state.contacts);
  // const dispatch = useDispatch();

  const [selectedContact, setSelectedContact] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(contactList);
  
  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsOpen(true);
  };

  const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this contact?")) {
    try {
      await axios.post(`${baseUrl}/delete/${id}`);  
      removeContactFromList(id);
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete contact.");
    }
  }
};
  // const filteredContacts = contactList.filter((contact) =>
  //   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredContacts = contacts;
  console.log(filteredContacts);

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
            <Th>Contacts ({totalContacts})</Th><Th></Th> 
            <Th></Th>
          </Tr>
          
        </Thead>
        <Tbody>
          {filteredContacts.length === 0 ? (
            <Tr >
              <Td colSpan={3} textAlign="center" color="gray.500">
                No contacts found.
                {/*contactList.length === 0 ? "No contacts added yet." : "No contacts found."*/}
              </Td>
            </Tr>
          ) : (
            filteredContacts
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((contact, index) => (
                <Tr key={index} _hover={{ bg: "gray.50" }}>
                  <Td>
                    <Flex align="center" gap={3}>
                      <Avatar
                        size="sm"
                        // name={contact.name}
                        src = {contact.avatar}
                        color="white"
                      />
                      <Text fontWeight="medium">{contact.name}</Text>
                    </Flex>
                  </Td>
                  <Td>{contact.MobileNo}</Td>
                  <Td textAlign="right">
                    {/* <HStack spacing={2} justifyContent="flex-end"> */}
                      <IconButton
                    icon={<EditIcon />}
                    // colorScheme="teal"
                    size="sm"
                    onClick={() => handleEdit(contact)}
                  />
                     <IconButton
                    icon={<DeleteIcon />}
                    colorScheme="black"
                    variant="ghost"
                    onClick={() => handleDelete(contact._id)}
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
        onUpdate={updateContactInList}
      />    </>
  );
}

export default ContactList;







