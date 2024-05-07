import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
const navbar = () => {
  return (
    <Box display="flex" 
    justifyContent="space-between" 
    alignItems="center" 
    borderBottom="1px solid #B0B0B0"
    p="4"
    mx="20"
    >
        <Box>
            <Text fontWeight={"bold"} fontSize={"xl"}>VerbalizeIt</Text>
        </Box>
        <Box display="flex" gap="2">
            <Text>Service</Text>
            <Text>Blog</Text>
            <Text>About Us</Text>
            <Text>Contact</Text>
        </Box>
        <Box>
            <Button rounded="3xl" p="4" bg="#FFCE31">Register</Button>
        </Box>
    </Box>
  );
};

export default navbar;
