import { Box, Img, Text, Image, Input, Button } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import Mobile from "../assets/images/mobile.png";
const getStarted = () => {
  return (
    <Box  mx="20"  >
  <Box display="flex" gap="20">
      <Box width={900} mt="60">
        <Text fontSize="6xl" fontWeight="bold"  mt="16" mb="12">We make you <br /> learn langauage  <br /> easily!</Text>
        <Text fontSize="2xl" mb="8">
          We help you learn langauage easily. with the easy lessons, you will
          earns points and unlock new levels while to improving the real world
          communications.
        </Text>
        <Box display="flex" gap="2">
          <Input placeholder="Enter your email" bg="#F5F5F5" rounded="3xl" w="300" p="4" h="16"/>
          <Button rounded="3xl" p="8" bg="#FFCE31" h="16" w="40"  fontWeight="bold">
            Get Started
          </Button>
        </Box>
      </Box>
      <Box mt="120">
        <NextImage
        
        //   as={NextImage}
          height={"1000"}
        //   w={"auto"}
        width={1000}
          src="/mobile.png"
          alt="alternative pictures"
        />
      </Box>
    </Box>
    <Box display="flex"  justifyContent="space-between" mt="20" mb="24">
    <Box>
        <NextImage 
        height={"100"}
         width={300}
          src="/pic.png"
          alt="alternative pictures"
        />
        </Box>
        <Box>
        <NextImage 
        height={"100"}
         width={700}
          src="/logo.png"
          alt="alternative pictures"
        />
        </Box>
    </Box>
    </Box>
  
  );
};

export default getStarted;
