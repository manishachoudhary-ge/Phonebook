import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import NewContact from './Components/NewContact';
import ContactList from './Components/ContactList';
// import EditContact from './Components/EditContact';
import Searching from './Components/Searching';
import { PhoneIcon } from "@chakra-ui/icons"; 

import { Container, HStack, Heading, Input, Button, Box, Flex } from "@chakra-ui/react";
import './App.css'
const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  const [contacts, setContacts] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
  
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${baseUrl}/list`);
        if (res.data.user) {
          setContacts(res.data.user);
        }
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };
    useEffect(() => {
    fetchContacts();
  }, []);

   const addContactToList = (newContact) => {
    setContacts(prev => [...prev, newContact]);
  };

  const updateContactInList = (updatedContact) => {
  setContacts(prev =>
    prev.map(contact =>
      contact._id === updatedContact._id ? updatedContact : contact
    )
  );
};

const removeContactFromList = (id) => {
  setContacts(prev => prev.filter(contact => contact._id !== id));
};

 const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
   // Filtered contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <Flex m={5} justify={'space-between'}>
          <Box >
            <HStack spacing={3}>
            <PhoneIcon color="blue.500" boxSize={5} />
          <Heading size="md">Phonebook</Heading> 
          //fontWeight="semibold"
          </HStack>
          </Box>
          <Box px={8}>
            <Searching searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          </Box>
          <Box>
          <NewContact addContactToList={addContactToList} contacts={contacts} />
          </Box>
        </Flex>
      {/* <List /> */}
      <ContactList contacts={filteredContacts} updateContactInList={updateContactInList} removeContactFromList={removeContactFromList}  />
      


     
    </>
  )
}

export default App











