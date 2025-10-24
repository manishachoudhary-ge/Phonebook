import React from "react";
import { Box, Button, Text, HStack } from "@chakra-ui/react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages === 0) return null;
    
  return (
    <Box mt={4} display="flex" justifyContent="center" >
      <HStack spacing={4}>
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
}

export default Pagination;
