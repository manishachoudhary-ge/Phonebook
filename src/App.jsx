import { useState } from 'react'
import Navpb from './Components/Navpb';
import List from './Components/List';
import CreateButton from './Components/CreateButton';
import NewContact from './Components/NewContact';

import { Container, HStack, Heading, Input, Button, Box } from "@chakra-ui/react";
import './App.css'

function App() {
  

  return (
    <>
      <Container W={"md"}>
        <HStack w={"full"} spacing={4} justifyContent="space-between" >
        <Heading size="md">Phonebook</Heading>
        <Input w={230} placeholder='Search' />
         <NewContact /> 
      </HStack>
      </Container>



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
