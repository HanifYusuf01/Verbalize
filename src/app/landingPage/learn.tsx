import React from "react";
import { Box, Button, Text, Image, Icon,  Center } from "@chakra-ui/react";
import NextImage from "next/image";
import { FaApple } from "react-icons/fa";
const learn = () => {
  return (
<Box bg="#FFCE31">
    <Center>
        <Box>
        <Text fontSize="6xl" fontWeight="bold" mt="40">Learn a new language for<br /> free download app Now!</Text>
<Box>
        </Box>
    
    <Box display="flex" gap="4">
        <Box mt="110">
        <Button bg="black" display="flex" p="40px" >
    <Icon as={FaApple} color="white" fontSize="3xl" />
    <Box fontSize="2xl">
    <Text  color="gray.500">Download on</Text>
        <Text color="white"> App Store</Text>
    </Box>
   
    </Button>
        </Box>
   <Box>
   <NextImage 
        height={"10"}
         width={300}
          src="/R.png"
          alt="alternative pictures"
        />
   </Box>
   
    </Box>
</Box>
    </Center>
    
</Box>
  )
};

export default learn;
