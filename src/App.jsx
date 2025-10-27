import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import NewContact from './Components/NewContact';
import ContactList from './Components/ContactList';
// import EditContact from './Components/EditContact';
import Searching from './Components/Searching';
import Pagination from './Components/Pagination';
import { PhoneIcon } from "@chakra-ui/icons"; 

import { Container, HStack, Heading, Input, Button, Box, Flex , Text} from "@chakra-ui/react";
import './App.css'
const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalContacts, setTotalContacts] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const limit = 10;
  
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
      `${baseUrl}/list?page=${currentPage}&limit=${limit}&search=${searchTerm}`
    );
      setContacts(res.data.users);
      setCurrentPage(res.data.page);
      setTotalPages(res.data.totalPages);
      setTotalContacts(res.data.totalUsers) //total contact count
        // const res = await axios.get(`${baseUrl}/list`);
        // if (res.data.user) {
        //   setContacts(res.data.user);
        // }
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };
    useEffect(() => {
    fetchContacts();
  }, [currentPage, searchTerm]);

  const handleContactAdded = async () => {
    await fetchContacts(totalPages);
  };


  const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
  }
};

   const addContactToList = async (newContact) => {
    await fetchContacts();
    // setContacts(prev => {
    //   const updated = [...prev, newContact];
    //   updated.sort((a, b) => a.name.localeCompare(b.name));
    //   return updated;
    // });
    setTotalContacts(prev => prev + 1);
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
    setTotalContacts(prev => prev - 1);
};

 const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };
   // Filtered contacts based on search term
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
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
      <ContactList contacts={filteredContacts} updateContactInList={updateContactInList} removeContactFromList={removeContactFromList} totalContacts={totalContacts}
       />

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} 
/>
 


     
    </>
  )
}

export default App











