import React from "react";
import { Box, Text, } from "@chakra-ui/react";
import NextImage from "next/image";
const mapReach = () => {
  return (
    <Box mt="40" mx="20" mb="40">
        <Box textAlign="center" mb="32">
        <Text fontSize="6xl" fontWeight={"bold"} textAlign="center" mb="12" width="2000" >Learn a  langauage the fun way</Text>
        <Text fontSize="2xl">Reach your language fast with world #1 education app</Text>
        </Box>
        <Box>
        <NextImage 
        height={"100"}
         width={2500}
          src="/map.png"
          alt="alternative pictures"
        />
        </Box>
       <Box display="flex" justifyContent={"space-between"} mx="12">
        <Box>
        <Text fontSize="6xl" fontWeight="bold">4.5K+</Text>
        <Text>Daily register from new users</Text>
        </Box>
        <Box>
        <Text fontSize="6xl" fontWeight="bold">1.5K+</Text>
        <Text>Language in the world</Text>
        </Box>   
        <Box>
        <Text fontSize="6xl" fontWeight="bold">1000+</Text>
        <Text>Total learners in the world</Text>
        </Box>
       </Box>
    </Box>
  );
};

export default mapReach;
