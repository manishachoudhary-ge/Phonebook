import { useState } from 'react'
import Navpb from './Components/Navpb';
import List from './Components/List';
import inputSearch from './Components/inputSearch';
import CreateButton from './Components/CreateButton';

import { Container, HStack, Heading, Input, Button } from "@chakra-ui/react";
import './App.css'

function App() {
  

  return (
    <>
      <Container W={"md"}>
        <HStack w={"full"} spacing={4} justifyContent="space-between" >
        <Heading size="md">Phonebook</Heading>
        <Input w={230} placeholder='Search' />
        <CreateButton />
        {/* <Button>Create Contact</Button> */}
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
