import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function ListConDis() {
  return (
    <TableContainer >
  <Table variant="simple" size="md">
    <Thead  >
      <Tr >
        <Th >Name</Th>
        <Th >Phone Number</Th>
      </Tr>
    </Thead>
    <Tbody  >
      <Tr>
        <Td>Khushi</Td>
        <Td>7345628976</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default ListConDis











{/* <UnorderedList ml={5} display="flex" flexDirection="row" wrap="wrap" gap={520} styleType="none">
  <ListItem>Name</ListItem>
  <ListItem>Phone Number</ListItem>
</UnorderedList> */}