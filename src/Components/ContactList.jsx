import React from "react";
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
import NewContact from "./NewContact";

function ContactList() {
  const contactList = useSelector((state) => state.contacts.contactList);
  console.log(contactList);

  return (
    <TableContainer>
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone Number</Th>
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
                    <HStack spacing={2} justifyContent="flex-end">
                      <IconButton
                        aria-label="Edit contact"
                        icon={<EditIcon />}
                        size="sm"
                        // onClick={() => onEdit(contact)}
                        onClick={()=> handleClick}
                      />
                      <IconButton
                        aria-label="Delete contact"
                        icon={<DeleteIcon />}
                        size="sm"
                        // onClick={() => handleDelete(contact.id)}
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ContactList;
