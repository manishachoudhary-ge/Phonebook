import { useState } from 'react'
import Navpb from './Components/Navpb';
import NewContact from './Components/NewContact';
import ContactList from './Components/ContactList';
import EditContact from './Components/EditContact';

import { Container, HStack, Heading, Input, Button, Box, Flex } from "@chakra-ui/react";
import './App.css'

function App() {
  

  return (
    <>
        <Flex m={5} justify={'space-between'}>
          <Box >
          <Heading size="md">Phonebook</Heading>
          </Box>
          <Box px={8}>
            <Input placeholder='Search' />
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











