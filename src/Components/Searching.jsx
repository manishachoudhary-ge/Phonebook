import React from 'react'
import { Box, } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { CloseButton, InputLeftElement, Input, InputGroup } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from '../features/contactSlice';

function Searching() {
  const searchTerm = useSelector((state) => state.contacts.searchTerm);
  const dispatch = useDispatch();

  const handleSearchChange = (e) =>{
    dispatch(searchContact(e.target.value));
  }
  return (
        <Box w={300} mb={4}>
         <InputGroup>
          <InputLeftElement pointerEvents="none">
      <SearchIcon color="gray.400" />
    </InputLeftElement>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        pl="35px"
      />
      </InputGroup>
       {/* <Input
     
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        // variant="fille
      /> */}
    </Box>
        
  )
}

export default Searching