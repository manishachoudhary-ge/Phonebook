import { useState } from 'react'
import Navpb from './Components/Navpb';
import List from './Components/ListConDis';
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
      
        
      




      {/* <Container maxW="container.sm" py={4}>
        <HStack spacing={8} justifyContent={'space-evenly'} w="full">
          <Box >
          <Heading size="md">Phonebook</Heading>
          </Box>
          <Box flex="1" px={8}>
            <Input placeholder='Search' />
          </Box>
          <Box>
          <NewContact />
          </Box>
        </HStack>
      </Container> */}



    {/* <div className='Appmaincom'>
        <div></div>
        <Navpb />
        <List />
        <inputSearch />
        
    
        </div>
      </div> */}
     
    </>
  )
}

export default App











