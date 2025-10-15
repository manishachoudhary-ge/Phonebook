import { useState } from 'react'
import NewContact from './Components/NewContact';
import ContactList from './Components/ContactList';
import EditContact from './Components/EditContact';
import Searching from './Components/Searching';
import { PhoneIcon } from "@chakra-ui/icons"; 

import { Container, HStack, Heading, Input, Button, Box, Flex } from "@chakra-ui/react";
import './App.css'

function App() {
  

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
            <Searching />
          </Box>
          <Box>
          <NewContact />
          </Box>
        </Flex>
      {/* <List /> */}
      <ContactList />
      


     
    </>
  )
}

export default App











